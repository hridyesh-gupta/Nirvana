# Nirvana Restaurant - Next.js Application

This is a [Next.js](https://nextjs.org) project for Nirvana Restaurant, featuring an online ordering system with Stripe payments and email notifications.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Email Service Configuration

The application uses Nodemailer with SMTP to send order confirmation emails to customers and notification emails to the restaurant owner.

### Environment Variables

Add the following SMTP configuration variables to your `.env` file:

```env
# SMTP Email Configuration
SMTP_HOST=mail.your-hosting-provider.com
SMTP_PORT=587
SMTP_USER=noreply@nirvana-geneve.ch
SMTP_PASSWORD=your_smtp_password_here
SMTP_FROM_NAME=Nirvana Restaurant
SMTP_FROM_EMAIL=noreply@nirvana-geneve.ch

# Restaurant Owner Email
OWNER_EMAIL=owner@example.com
```

### Getting SMTP Credentials

#### From Hosting Provider
Most hosting providers (including phpMyAdmin hosting) include email services with SMTP credentials:
1. Log into your hosting control panel
2. Navigate to Email settings or Mail configuration
3. Create an email account (e.g., `noreply@yourdomain.com`)
4. Note the SMTP server details (host, port, username, password)

#### Using Gmail for Testing
For development and testing, you can use Gmail SMTP:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-gmail@gmail.com
SMTP_PASSWORD=your-app-specific-password
```

**Note**: You'll need to generate an App-Specific Password in your Google Account settings.

#### Alternative Services
- **SendGrid**: Professional email service with generous free tier
- **Mailgun**: Developer-friendly email API
- **Amazon SES**: Cost-effective for high volume

### Testing Email Functionality

1. **Development Mode**: If SMTP credentials are not configured, emails will be logged to the console instead of being sent
2. **Production Testing**: Use a service like [Mailtrap](https://mailtrap.io/) to test emails without sending them to real recipients
3. **Check Spam Folders**: If emails aren't received, check spam/junk folders

### Email Templates

The application sends two types of emails:

#### Customer Order Confirmation
- Professional HTML template with restaurant branding
- Order details including items, customizations, and pricing
- Delivery/pickup information
- Payment status and method
- Special instructions (if provided)

#### Owner Notification
- Alert-style design for quick order processing
- Customer contact information prominently displayed
- Complete order details with customizations
- Delivery address (for delivery orders)
- Payment collection reminders (for COD orders)

### Troubleshooting

#### Common Issues

**SMTP Authentication Failures**
- Verify username and password are correct
- Check if 2FA is enabled (use App-Specific Password for Gmail)
- Ensure SMTP server supports the authentication method

**Port Blocking**
- Try different ports: 587 (TLS), 465 (SSL), or 25 (unencrypted)
- Check if your hosting provider blocks certain ports
- Use your hosting provider's recommended SMTP settings

**Emails in Spam**
- Configure SPF, DKIM, and DMARC records for your domain
- Use a professional "from" address
- Avoid spam trigger words in email content

**Missing Environment Variables**
- Ensure all required SMTP variables are set in `.env`
- Restart the development server after adding new environment variables
- Check variable names match exactly (case-sensitive)

### Deployment Notes

When deploying to Vercel or other platforms:

1. **Add Environment Variables**: All SMTP environment variables must be added to your deployment platform's environment settings
2. **Domain Configuration**: Update `SMTP_FROM_EMAIL` to use your production domain
3. **DNS Records**: Configure proper DNS records (SPF, DKIM) for email deliverability
4. **Rate Limits**: Be aware of SMTP provider rate limits for production use

## Delivery Ordering System

### Features
- ✅ Customer information collection (name, email, phone)
- ✅ Delivery address management
- ✅ Order type selection (delivery/pickup)
- ✅ Payment methods: Stripe (online) and Cash on Delivery
- ✅ Email notifications (customer confirmation + owner notification)
- ✅ Order tracking and confirmation pages
- ✅ Database persistence with MySQL via Prisma
- ✅ Webhook handling for Stripe payments
- ✅ Form validation (email, phone, address)
- ✅ Special instructions field
- ✅ Item customizations (sauces, flavors, mix options)

### Tech Stack
- **Database**: MySQL with Prisma ORM
- **Payments**: Stripe Checkout (embedded mode)
- **Email**: Nodemailer with SMTP
- **Validation**: Client-side + server-side validation
- **State Management**: Zustand-like cart store with localStorage

### Setup Instructions

1. **Database Setup**:
   ```bash
   # Generate Prisma client
   npm run prisma:generate
   
   # Run migrations
   npm run prisma:migrate
   
   # Open Prisma Studio to view data
   npm run prisma:studio
   ```

2. **Environment Variables**:
   Copy `.env.local.example` to `.env.local` and fill in:
   - `DATABASE_URL`: MySQL connection string
   - `STRIPE_SECRET_KEY` & `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_WEBHOOK_SECRET`: From Stripe Dashboard
   - `SMTP_*`: Email server credentials
   - `OWNER_EMAIL`: Restaurant owner email

3. **Testing**:
   See `TESTING_GUIDE.md` for comprehensive test scenarios.

4. **Deployment**:
   See `DEPLOYMENT_CHECKLIST.md` for production deployment steps.

### File Structure
```
app/
├── cart/page.tsx              # Shopping cart with customer form
├── return/page.tsx            # Order confirmation page
├── orders/[id]/page.tsx       # Order tracking page
├── api/
│   ├── webhooks/route.js      # Stripe webhook handler
│   ├── orders/create/route.ts # COD order creation
│   ├── send-order-email/      # Customer email API
│   ├── send-notification/     # Owner email API
│   ├── health/route.ts        # System health check
│   └── test-email/route.ts    # Email testing endpoint
lib/
├── db.ts                      # Prisma client singleton
├── email.ts                   # Email service wrapper
├── emailService.ts            # Nodemailer configuration
├── emailTemplates.ts          # HTML email templates
├── cartStore.ts               # Cart state management
└── types/order.ts             # TypeScript types
prisma/
└── schema.prisma              # Database schema
```

### API Endpoints

- `POST /api/orders/create` - Create COD order
- `POST /api/webhooks` - Stripe webhook handler
- `POST /api/send-order-email` - Send customer confirmation
- `POST /api/send-notification` - Send owner notification
- `GET /api/health` - System health check
- `POST /api/test-email` - Test email configuration

### Database Schema

See `prisma/schema.prisma` for complete schema. Key models:
- `Order`: Customer info, delivery address, payment details, totals
- `OrderItem`: Individual items with customizations

### Troubleshooting

**Emails not sending?**
- Check SMTP credentials in `.env.local`
- Test with `/api/test-email` endpoint
- Check Vercel logs for email errors

**Webhook not working?**
- Verify `STRIPE_WEBHOOK_SECRET` is set
- Check webhook endpoint is accessible
- Use Stripe CLI to test locally

**Orders not appearing?**
- Check database connection
- Verify Prisma migrations ran
- Check Vercel logs for errors

For more help, see documentation files in the root directory.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
