# Deployment Checklist for Nirvana Restaurant Ordering System

This checklist provides step-by-step instructions for deploying the ordering system to production.

## 1. Database Setup

### Access phpMyAdmin from hosting provider
- Log into your hosting provider's control panel
- Navigate to phpMyAdmin or database management section
- Create a new MySQL database for the restaurant ordering system

### Create new MySQL database
```sql
CREATE DATABASE nirvana_orders;
```

### Note down database credentials
- **Host**: Usually `localhost` or provided by hosting provider
- **Username**: Database username (often same as cPanel username)
- **Password**: Database password
- **Database Name**: `nirvana_orders` (or your chosen name)
- **Port**: Usually `3306`

### Update DATABASE_URL in .env.local
```bash
DATABASE_URL="mysql://username:password@host:3306/nirvana_orders"
```

### Generate Prisma client and run migrations
```bash
# Generate Prisma client
npx prisma generate

# Run migrations to create tables in production database
npx prisma migrate deploy

# Optional: Open Prisma Studio to verify tables
npx prisma studio
```

## 2. Stripe Configuration

### Switch from test keys to live keys
1. Go to [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. Toggle from "Test mode" to "Live mode"
3. Copy the live publishable and secret keys

### Update environment variables
```bash
# Replace test keys with live keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_live_publishable_key
STRIPE_SECRET_KEY=sk_live_your_live_secret_key
```

### Create webhook endpoint
1. Go to [Stripe Dashboard → Webhooks](https://dashboard.stripe.com/webhooks)
2. Click "Add endpoint"
3. Set endpoint URL: `https://yourdomain.com/api/webhooks`
4. Select events to listen for:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
5. Copy the webhook signing secret

### Set webhook secret
```bash
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_signing_secret
```

### Test webhook locally (optional)
```bash
# Install Stripe CLI
stripe listen --forward-to localhost:3000/api/webhooks

# In another terminal, trigger test event
stripe trigger checkout.session.completed
```

## 3. Email Configuration

### Get SMTP credentials from hosting provider
- Access your hosting provider's email settings
- Create or use existing email account (e.g., `noreply@nirvana-geneve.ch`)
- Note down SMTP settings:
  - **SMTP Host**: Usually `mail.yourdomain.com` or provided by host
  - **SMTP Port**: Usually `587` (TLS) or `465` (SSL)
  - **Username**: Full email address
  - **Password**: Email account password

### Test SMTP connection
```bash
# Test with telnet (optional)
telnet mail.yourdomain.com 587

# Or use online SMTP testing tools
```

### Update SMTP variables in .env.local
```bash
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_USER=noreply@nirvana-geneve.ch
SMTP_PASSWORD=your_actual_email_password
SMTP_FROM_NAME=Nirvana Restaurant
SMTP_FROM_EMAIL=noreply@nirvana-geneve.ch
```

### Set owner email
```bash
OWNER_EMAIL=owner@nirvana-geneve.ch
```

### Test email sending
- Use the `/api/test-email` endpoint (if implemented)
- Place a test order and verify emails are received

## 4. Vercel Deployment

### Add environment variables to Vercel
1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add all variables from `.env.local`:
   - `DATABASE_URL`
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`
   - `SMTP_FROM_NAME`, `SMTP_FROM_EMAIL`
   - `OWNER_EMAIL`
   - `INTERNAL_API_KEY`
   - `NEXT_PUBLIC_APP_URL`

### Ensure database accessibility
- Whitelist Vercel IP addresses in your hosting provider's firewall
- Or use a database service that allows external connections

### Set production URL
```bash
NEXT_PUBLIC_APP_URL=https://nirvana-geneve.ch
```

### Deploy and test
```bash
# Deploy to Vercel
vercel --prod

# Test webhook endpoint is accessible
curl https://yourdomain.com/api/webhooks
```

## 4a. Standalone Build Deployment (Alternative to Vercel)

### What is Standalone Build?
The project now uses `output: 'standalone'` in `next.config.ts`, which creates a self-contained build in the `.next/standalone` directory. This provides:
- **Smaller deployment size** (~80% reduction compared to default builds)
- **Faster cold starts** with minimal Node.js server
- **Docker-friendly** deployment option
- **Self-contained** with only necessary dependencies

### Standalone Build Instructions

#### 1. Build the standalone application
```bash
# Generate Prisma client and build (automatically copies static files via postbuild script)
npm run build

# The standalone server will be created at:
# .next/standalone/server.js
# Static files are automatically copied via postbuild script
```

#### 2. Copy required static files (automatic)
```bash
# Files are automatically copied via postbuild script, but manual copy is also available:
# Copy static files to standalone directory
cp -r .next/static .next/standalone/.next/static

# Copy public files to standalone directory
cp -r public .next/standalone/public
```

#### 3. Start the standalone server
```bash
# Preferred method: Use the npm script (automatically copies static files)
npm run start:standalone

# Or manually navigate to standalone directory
cd .next/standalone
node server.js

# Or with custom port
PORT=8080 node server.js
```

### Docker Deployment Example

#### Multi-stage Dockerfile structure:
```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx prisma generate
RUN npm run build

# Runtime stage
FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["node", "server.js"]
```

#### Docker deployment commands:
```bash
# Build Docker image
docker build -t nirvana-restaurant .

# Run with environment variables
docker run -p 3000:3000 \
  -e DATABASE_URL="mysql://..." \
  -e STRIPE_SECRET_KEY="sk_live_..." \
  nirvana-restaurant
```

### VPS/Dedicated Server Deployment

#### 1. Upload standalone build
```bash
# Upload the .next/standalone directory to your server
scp -r .next/standalone user@your-server:/opt/nirvana/
```

#### 2. Set up environment variables
```bash
# Create .env file on server
nano /opt/nirvana/.env

# Add all required environment variables:
DATABASE_URL="mysql://..."
STRIPE_SECRET_KEY="sk_live_..."
# ... (all other variables)
```

#### 3. Configure process manager (PM2)
```bash
# Install PM2 globally
npm install -g pm2

# Create PM2 ecosystem file
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: 'nirvana-restaurant',
    script: 'server.js',
    cwd: '/opt/nirvana',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
EOF

# Start application
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### 4. Configure reverse proxy (nginx)
```nginx
server {
    listen 80;
    server_name nirvana-geneve.ch;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Environment Variables for Standalone Builds

#### Build-time variables (must be set during `npm run build`):
- `DATABASE_URL` - Required for Prisma client generation
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Embedded in client code
- `NEXT_PUBLIC_APP_URL` - Embedded in client code
- `NEXT_PUBLIC_DELIVERY_FEE` - Embedded in client code
- `NEXT_PUBLIC_MIN_ORDER_AMOUNT` - Embedded in client code

#### Runtime-only variables (set when running `node server.js`):
- `STRIPE_SECRET_KEY` - Server-side Stripe operations
- `STRIPE_WEBHOOK_SECRET` - Webhook signature verification
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD` - Email configuration
- `SMTP_FROM_NAME`, `SMTP_FROM_EMAIL` - Email sender configuration
- `OWNER_EMAIL` - Order notification recipient
- `INTERNAL_API_KEY` - API authentication

**Important**: `NEXT_PUBLIC_*` variables are embedded into the JavaScript bundle at build time and cannot be changed without rebuilding. Other variables can be changed by restarting the server.

## 4b. Build Script Options

The project includes three different build scripts to handle various deployment scenarios and troubleshooting needs.

### Available Build Scripts

#### 1. Standard Build (`npm run build`)
- **Purpose**: Standard production build with static optimization
- **Use case**: Normal production deployments
- **Behavior**: 
  - Optimizes static pages and pre-renders where possible
  - Dynamic routes (marked with `force-dynamic`) are skipped during build
  - Should complete in 2-5 minutes depending on project size
- **When to use**: Default choice for production deployments

#### 2. Compile Mode (`npm run build:compile`)
- **Purpose**: Emergency fallback if standard build hangs despite all fixes
- **Use case**: When standard build hangs at "Collecting page data" phase
- **Behavior**:
  - Completely skips the "Collecting page data" phase
  - No pages are pre-rendered; all render on first request
  - Faster build times but slower first page loads
- **Trade-off**: First request to each page has cold start delay
- **When to use**: 
  - If `npm run build` still hangs after implementing all fixes
  - For CI/CD pipelines where build speed is critical
  - For environments where database is not accessible during build
  - As a temporary workaround while investigating persistent build issues

#### 3. Debug Mode (`npm run build:debug`)
- **Purpose**: Diagnostic tool to verify route configuration
- **Use case**: Troubleshooting build issues and verifying configuration
- **Behavior**:
  - Shows which routes are static (○) vs dynamic (λ)
  - Displays route segment config like `[force-dynamic]` and `[revalidate: 0]`
  - Provides detailed build phase information
- **When to use**:
  - To verify that all Prisma-using routes are correctly marked as dynamic
  - To diagnose which route is causing build to hang (if timeout error occurs)
  - To confirm that the previous fixes are working as expected
  - Before deploying to production, to validate build configuration

### Debug Output Verification

After running `npm run build:debug`, verify the following routes show the correct configuration:

**Expected output for dynamic routes:**
```
λ /orders/[id]                         (Server) [force-dynamic]
λ /return                              (Server) [force-dynamic]
λ /api/health                          (Server) [force-dynamic]
λ /api/orders/create                   (Server) [force-dynamic]
λ /api/webhooks                        (Server) [force-dynamic]
```

**Key indicators:**
- `λ` symbol indicates dynamic routes (Server-side rendering)
- `[force-dynamic]` confirms the configuration is applied
- No routes using Prisma should show `○` (static) symbol

### Troubleshooting Decision Tree

#### If build hangs at "Collecting page data":
1. **First step**: Run `npm run build:debug` to see which route is being analyzed when it hangs
2. **Check route configuration**: Verify that route uses Prisma and has `export const dynamic = 'force-dynamic'`
3. **Check database configuration**: Verify `lib/db.ts` has build-time detection logic
4. **If issue persists**: Use `npm run build:compile` as temporary workaround
5. **Report issue**: Include debug output for further investigation

#### If build times out after 120 seconds:
1. **Error message**: Will show which route exceeded timeout
2. **Check route configuration**: Verify route has `force-dynamic` and `revalidate = 0` configured
3. **If route should be static**: Investigate why it's taking so long
4. **If route should be dynamic**: Ensure configuration is correct
5. **Consider timeout adjustment**: Increase `staticPageGenerationTimeout` in `next.config.ts` if legitimate static generation is slow

### Performance Expectations

- **Standard build**: Should complete in 2-5 minutes
- **"Collecting page data" phase**: Should take 10-30 seconds
- **If "Collecting page data" takes longer than 60 seconds**: Something is wrong
- **Compile mode build**: Should complete in 1-3 minutes (faster than standard)
- **Debug mode**: Adds 10-20% overhead compared to standard build

### CI/CD Recommendations

- **Production pipelines**: Use `npm run build` in production CI/CD pipelines
- **Build timeout**: Set build timeout in CI/CD to 10 minutes (allows for network delays)
- **Frequent timeouts**: If builds frequently timeout, investigate and fix root cause rather than using compile mode
- **Configuration validation**: Run `npm run build:debug` in a separate CI job to validate configuration
- **Performance optimization**: Consider caching `node_modules` and `.next/cache` to speed up builds

### Troubleshooting Standalone Builds

#### Issue: "Cannot find module" errors
**Solution**: Ensure all dependencies are in `dependencies`, not `devDependencies` in `package.json`

#### Issue: Static files not loading
**Solution**: Copy `.next/static` and `public` directories to standalone directory
```bash
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public
```

#### Issue: Environment variables not working
**Solution**: Check they're set in the runtime environment, not just build environment
```bash
# Verify environment variables are available
node -e "console.log(process.env.DATABASE_URL)"
```

#### Issue: Port conflicts
**Solution**: Set PORT environment variable
```bash
PORT=8080 node server.js
```

## 5. Testing Checklist

### Stripe Payment Testing
- [ ] Place test order with Stripe test card (`4242 4242 4242 4242`)
- [ ] Verify order appears in database
- [ ] Check customer confirmation email received
- [ ] Check owner notification email received
- [ ] Test with declined card (`4000 0000 0000 0002`)

### COD Order Testing
- [ ] Test COD order creation for delivery
- [ ] Test COD order creation for pickup
- [ ] Verify order in database with `paymentStatus: 'pending'`
- [ ] Check emails sent for COD orders

### Form Validation Testing
- [ ] Test delivery address validation
- [ ] Test pickup order flow
- [ ] Test invalid email format
- [ ] Test invalid phone number format
- [ ] Test special instructions field (500 char limit)

### Email Testing
- [ ] Test customer confirmation email
- [ ] Test owner notification email
- [ ] Verify HTML email rendering
- [ ] Check all order details are correct
- [ ] Test email links work

### Database Testing
```sql
-- Check orders table
SELECT * FROM orders ORDER BY createdAt DESC LIMIT 10;

-- Check order items
SELECT * FROM OrderItem WHERE orderId = 'order-id-here';

-- Check for duplicate orders
SELECT stripeSessionId, COUNT(*) FROM orders GROUP BY stripeSessionId HAVING COUNT(*) > 1;
```

### Error Handling Testing
- [ ] Test database connection failure
- [ ] Test SMTP server unavailable
- [ ] Test Stripe API error
- [ ] Test invalid webhook signature
- [ ] Test malformed request data

### Edge Cases
- [ ] Very long special instructions (500 chars)
- [ ] Cart with many items (test metadata serialization)
- [ ] Concurrent orders from same customer
- [ ] Webhook received before page redirect
- [ ] Browser back button after order
- [ ] Cart cleared during checkout

## 6. Production Cutover

### Switch Stripe to live mode
- Update environment variables with live keys
- Update webhook endpoint to production URL
- Test with small real transaction

### Monitor first orders
- Check Vercel logs for errors
- Monitor Stripe webhook delivery status
- Verify emails are being sent
- Check database for order records

### Have rollback plan ready
- Keep test environment running
- Document rollback steps
- Have database backup ready

## 7. Post-Deployment Monitoring

### Check system health
- Use `/api/health` endpoint to verify all services
- Monitor Vercel logs for errors
- Check Stripe webhook delivery status

### Verify email functionality
- Monitor email delivery rates
- Check spam folders for customer emails
- Test email sending periodically

### Monitor database
- Check for order records
- Monitor database performance
- Set up database backups

### Customer feedback
- Monitor customer complaints
- Check order completion rates
- Track payment success rates

## 8. Security Considerations

### Environment Variables
- Never commit `.env.local` to version control
- Use strong, unique passwords
- Rotate API keys regularly

### Database Security
- Use strong database passwords
- Limit database access to necessary IPs
- Regular database backups

### API Security
- Use HTTPS for all endpoints
- Validate all input data
- Rate limit API endpoints
- Monitor for suspicious activity

## 9. Maintenance Tasks

### Regular Updates
- Update dependencies monthly
- Monitor security advisories
- Update Stripe webhook events as needed

### Performance Monitoring
- Monitor page load times
- Check database query performance
- Monitor email delivery times

### Backup Strategy
- Daily database backups
- Regular code repository backups
- Document recovery procedures

## 10. Troubleshooting Common Issues

### Build hanging at "Collecting page data"
**Solution**: Ensure dynamic routes have proper configuration
- Verify `export const dynamic = 'force-dynamic'` is added to `/app/orders/[id]/page.tsx`
- Verify `export const dynamic = 'force-dynamic'` is added to `/app/return/page.tsx`
- Check that `lib/db.ts` has build-time detection to prevent database connections during build
- Ensure `DATABASE_URL` has connection timeout parameters: `?connect_timeout=10&pool_timeout=10&connection_limit=5`

### Database connection timeout during build
**Solution**: Verify PrismaClient configuration
- Check that `lib/db.ts` has build-time detection (`process.env.NEXT_PHASE === 'phase-production-build'`)
- Verify connection timeout configuration in `DATABASE_URL`
- Ensure no eager database connections during build phase

### Emails not sending
- Check SMTP credentials
- Verify email server status
- Check spam folders
- Test with `/api/test-email` endpoint

### Webhook not working
- Verify `STRIPE_WEBHOOK_SECRET` is correct
- Check webhook endpoint is accessible
- Monitor Stripe webhook logs
- Test with Stripe CLI

### Orders not appearing
- Check database connection
- Verify Prisma migrations ran
- Check Vercel logs for errors
- Test database queries manually

### Payment issues
- Verify Stripe keys are correct
- Check Stripe dashboard for errors
- Test with different payment methods
- Monitor Stripe webhook delivery

---

**Note**: This checklist should be customized based on your specific hosting provider and requirements. Always test thoroughly in a staging environment before deploying to production.
