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
