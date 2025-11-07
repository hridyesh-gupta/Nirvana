# Stripe Webhook Configuration Verification Guide

## Overview

This guide provides comprehensive step-by-step instructions for verifying your Stripe webhook configuration in the Stripe Dashboard. Proper webhook configuration is critical for processing Stripe payments and creating orders in the database.

**Purpose**: This Phase 1 verification ensures that your Stripe webhook endpoint is properly configured to receive and process `checkout.session.completed` events, which is essential for the order creation flow.

---

## Prerequisites

Before starting the verification process, ensure you have:

1. ✅ **Stripe Account Access**: Admin access to your Stripe Dashboard
2. ✅ **Production Application Deployed**: Your application must be deployed and accessible at your production URL
3. ✅ **Webhook Endpoint URL**: Your production webhook endpoint URL (e.g., `https://yourdomain.com/api/webhooks`)
4. ✅ **Environment Variables Set**: `STRIPE_WEBHOOK_SECRET` is set in your production environment

---

## Step 1: Access Stripe Dashboard

### 1.1 Navigate to Stripe Dashboard

1. Go to [https://dashboard.stripe.com](https://dashboard.stripe.com)
2. Log in with your Stripe account credentials
3. **Important**: Ensure you're in the correct mode:
   - **Test Mode**: For testing with test cards (`4242 4242 4242 4242`)
   - **Live Mode**: For production transactions

### 1.2 Switch Between Test and Live Mode

- Look for the toggle switch in the top-right corner of the dashboard
- **Test Mode**: Gray background, shows "Test mode" toggle
- **Live Mode**: Black background, shows "Live mode" toggle
- **Verify**: Always verify you're in the correct mode before making changes

---

## Step 2: Navigate to Webhooks Section

### 2.1 Access Webhooks Settings

1. In the Stripe Dashboard sidebar, click on **"Developers"**
2. From the Developers submenu, click on **"Webhooks"**
3. You should see a list of webhook endpoints (if any exist) or an empty state

### 2.2 Understanding the Webhooks Page

The webhooks page displays:
- **Endpoint URL**: The URL where Stripe sends webhook events
- **Status**: Whether the endpoint is active or disabled
- **Events**: Which events are subscribed to
- **Last delivery**: When the last webhook was successfully delivered
- **Recent deliveries**: History of webhook attempts

---

## Step 3: Verify Webhook Endpoint Exists

### 3.1 Check for Existing Webhook Endpoint

1. **Look for your production webhook endpoint** in the list
   - Expected URL format: `https://yourdomain.com/api/webhooks`
   - Example: `https://nirvana-geneve.ch/api/webhooks`

2. **If endpoint exists**:
   - Proceed to Step 4 to verify configuration
   
3. **If endpoint does NOT exist**:
   - Proceed to Step 3.2 to create a new endpoint

### 3.2 Create New Webhook Endpoint (If Needed)

1. Click the **"Add endpoint"** button (or **"Add webhook endpoint"**)
2. In the **"Endpoint URL"** field, enter your production webhook URL:
   ```
   https://yourdomain.com/api/webhooks
   ```
   **Important**: 
   - Use `https://` (not `http://`)
   - Use your actual production domain
   - Include the full path `/api/webhooks`
   - No trailing slash

3. **Description** (optional): Add a descriptive name like "Nirvana Order Webhook"

4. Click **"Add endpoint"** to create

---

## Step 4: Verify Webhook Endpoint Configuration

### 4.1 Check Endpoint URL

1. **Click on your webhook endpoint** to open its details page
2. **Verify the endpoint URL** matches your production URL exactly:
   - ✅ Correct domain
   - ✅ Correct path (`/api/webhooks`)
   - ✅ Uses HTTPS
   - ✅ No typos or extra characters

3. **Common Issues**:
   - ❌ Using `http://` instead of `https://`
   - ❌ Incorrect domain (e.g., `localhost` or staging URL)
   - ❌ Missing `/api/webhooks` path
   - ❌ Trailing slash (`/api/webhooks/`)

### 4.2 Verify Endpoint Status

1. **Check the status indicator**:
   - ✅ **Enabled**: Green indicator, endpoint is active
   - ❌ **Disabled**: Gray indicator, endpoint is inactive
   
2. **If disabled**:
   - Toggle the switch to **enable** the endpoint
   - Wait a few seconds for the status to update

### 4.3 Verify Events Subscription

1. **Scroll to the "Events to send" section**
2. **Verify that `checkout.session.completed` is subscribed**:
   - ✅ Should be checked/enabled
   - ✅ Should appear in the list of subscribed events

3. **If `checkout.session.completed` is NOT subscribed**:
   - Click **"Select events"** or **"Edit"** button
   - Search for `checkout.session.completed`
   - Check the box to subscribe to this event
   - Click **"Add events"** or **"Save"**

4. **Verify no other unnecessary events are subscribed**:
   - While multiple events can work, subscribing only to `checkout.session.completed` is recommended for this application
   - Uncheck any other events if they're not needed

---

## Step 5: Verify Webhook Signing Secret

### 5.1 Locate the Signing Secret

1. **On the webhook endpoint details page**, look for the **"Signing secret"** section
2. **Click "Reveal"** or **"Click to reveal"** to show the secret
3. **The signing secret** should start with `whsec_`:
   ```
   whsec_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```

### 5.2 Verify Environment Variable

1. **Compare the signing secret** with your production environment variable:
   - Check your production environment (Vercel, hosting provider, etc.)
   - Verify `STRIPE_WEBHOOK_SECRET` matches the signing secret from Stripe Dashboard
   - **Important**: The secret must match exactly, including the `whsec_` prefix

2. **If they don't match**:
   - Copy the signing secret from Stripe Dashboard
   - Update `STRIPE_WEBHOOK_SECRET` in your production environment
   - **Note**: If you click "Reveal" again, Stripe may show a new secret - always use the one currently displayed

3. **If you need to regenerate the secret**:
   - Click **"Reveal"** again (this regenerates the secret)
   - **Important**: If you regenerate, you MUST update your environment variable immediately
   - Old secrets will stop working once regenerated

---

## Step 6: Test Webhook Endpoint

### 6.1 Send Test Webhook

1. **On the webhook endpoint details page**, scroll to the **"Send test webhook"** section
2. **Select event type**: Choose `checkout.session.completed`
3. **Click "Send test webhook"** button
4. **Wait for the response**:
   - ✅ **Success**: Should show "200 OK" response
   - ❌ **Error**: Should show error code (400, 500, etc.)

### 6.2 Verify Test Webhook Delivery

1. **Check the "Recent deliveries" section** below the test button
2. **Look for the test webhook** you just sent:
   - Should appear at the top of the list
   - Should show the event type (`checkout.session.completed`)
   - Should show the response status

3. **Click on the delivery** to see details:
   - **Request**: Shows the payload sent to your endpoint
   - **Response**: Shows the response from your endpoint
   - **Response time**: Should be reasonable (< 5 seconds)

### 6.3 Interpret Test Results

**✅ Success Indicators**:
- Response status: `200 OK`
- Response body: `{"message": "Received"}` or similar
- Response time: < 2 seconds
- No error messages in the response

**❌ Error Indicators**:
- Response status: `400`, `500`, or other error codes
- Error message in response body
- Response time: Very long (> 10 seconds) or timeout
- Connection errors

### 6.4 Troubleshoot Test Failures

If the test webhook fails:

1. **Check endpoint URL accessibility**:
   ```bash
   curl https://yourdomain.com/api/webhooks
   ```
   - Should return a response (even if it's an error about missing POST body)

2. **Verify SSL certificate**:
   - Ensure your domain has a valid SSL certificate
   - Stripe requires HTTPS for webhooks

3. **Check application logs**:
   - Review your application logs (Vercel logs, server logs, etc.)
   - Look for webhook processing errors
   - Check for signature verification failures

4. **Verify webhook secret**:
   - Ensure `STRIPE_WEBHOOK_SECRET` is set correctly
   - Check for typos or extra spaces
   - Verify the secret matches the one in Stripe Dashboard

---

## Step 7: Verify Webhook Event Logs

### 7.1 Check Recent Webhook Deliveries

1. **On the webhook endpoint details page**, scroll to **"Recent deliveries"**
2. **Review the list** of recent webhook attempts:
   - Shows timestamp of each attempt
   - Shows event type
   - Shows response status
   - Shows response time

3. **Look for patterns**:
   - ✅ **Mostly 200 responses**: Good sign
   - ⚠️ **Some 500 errors**: May indicate intermittent issues
   - ❌ **Mostly 400/500 errors**: Configuration problem

### 7.2 View Delivery Details

1. **Click on a delivery** to see detailed information:
   - **Request**: The webhook payload sent by Stripe
   - **Response**: The response from your endpoint
   - **Headers**: Request and response headers
   - **Timeline**: When the webhook was sent and received

2. **Check for common issues**:
   - **Signature verification failures**: Response shows `400 Bad Request` with "Webhook Error" message
   - **Timeout errors**: Response time is very long or shows timeout
   - **Server errors**: Response shows `500 Internal Server Error`

### 7.3 Check for Failed Deliveries

1. **Look for red indicators** or failed status in recent deliveries
2. **Common failure reasons**:
   - **Invalid signature**: Webhook secret mismatch
   - **Endpoint unreachable**: URL is incorrect or server is down
   - **Server error**: Application code error
   - **Timeout**: Server takes too long to respond

3. **If you see failures**:
   - Click on the failed delivery to see error details
   - Check your application logs for more information
   - Verify endpoint URL and webhook secret

---

## Step 8: Verify Production Webhook Activity

### 8.1 Check for Real Transaction Webhooks

1. **Place a test order** using your production application:
   - Use Stripe test card: `4242 4242 4242 4242`
   - Complete the checkout process
   - Wait for redirect to return page

2. **Return to Stripe Dashboard → Webhooks**
3. **Check "Recent deliveries"** section:
   - Should show a new webhook delivery
   - Event type: `checkout.session.completed`
   - Response: `200 OK` (if successful)

4. **Verify the order was created**:
   - Check your database for the new order
   - Verify order details match the webhook payload
   - Check that customer email was sent

### 8.2 Monitor Webhook Performance

1. **Check response times**:
   - Should consistently be < 2 seconds
   - If response times are high (> 5 seconds), investigate performance issues

2. **Monitor success rate**:
   - Should be > 95% successful deliveries
   - If success rate is low, investigate configuration issues

3. **Check for retries**:
   - Stripe automatically retries failed webhooks
   - Multiple retries for the same event may indicate persistent issues

---

## Step 9: Verify Webhook Security

### 9.1 Verify HTTPS is Required

1. **Check endpoint URL**:
   - Must use `https://` (not `http://`)
   - Stripe requires HTTPS for webhooks in production

2. **Verify SSL certificate**:
   - Your domain should have a valid SSL certificate
   - Certificate should not be expired
   - Certificate should be issued by a trusted CA

### 9.2 Verify Signature Verification

1. **Review webhook handler code** (`app/api/webhooks/route.js`):
   - Should verify webhook signature using `stripe.webhooks.constructEvent()`
   - Should use `STRIPE_WEBHOOK_SECRET` for verification
   - Should return 400 error if signature is invalid

2. **Test with invalid signature**:
   - Temporarily change `STRIPE_WEBHOOK_SECRET` in your environment
   - Send a test webhook from Stripe Dashboard
   - Should receive `400 Bad Request` response
   - Restore the correct secret after testing

---

## Step 10: Configuration Checklist

Use this checklist to verify all configuration is correct:

### Webhook Endpoint Configuration
- [ ] Webhook endpoint exists in Stripe Dashboard
- [ ] Endpoint URL is correct and uses HTTPS
- [ ] Endpoint status is "Enabled"
- [ ] `checkout.session.completed` event is subscribed
- [ ] Webhook signing secret is revealed and noted

### Environment Configuration
- [ ] `STRIPE_WEBHOOK_SECRET` is set in production environment
- [ ] `STRIPE_WEBHOOK_SECRET` matches the signing secret from Stripe Dashboard
- [ ] `STRIPE_SECRET_KEY` is set (live key for production, test key for testing)
- [ ] `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` is set correctly

### Application Configuration
- [ ] Webhook endpoint is accessible at `/api/webhooks`
- [ ] Webhook handler code is deployed
- [ ] Application logs are accessible for debugging
- [ ] Database connection is working

### Testing
- [ ] Test webhook from Stripe Dashboard returns 200 OK
- [ ] Test order creates order in database
- [ ] Webhook appears in recent deliveries
- [ ] Order confirmation email is sent
- [ ] Return page displays order correctly

---

## Common Issues and Solutions

### Issue 1: Webhook Endpoint Not Found (404)

**Symptoms**:
- Webhook delivery shows `404 Not Found`
- Response body shows "Not Found"

**Solutions**:
1. Verify endpoint URL is correct: `https://yourdomain.com/api/webhooks`
2. Check that the route file exists: `app/api/webhooks/route.js`
3. Verify the application is deployed and running
4. Check if there's a routing issue in your deployment

---

### Issue 2: Invalid Signature (400)

**Symptoms**:
- Webhook delivery shows `400 Bad Request`
- Response body shows "Webhook Error: Invalid signature"

**Solutions**:
1. Verify `STRIPE_WEBHOOK_SECRET` matches the signing secret in Stripe Dashboard
2. Check for typos or extra spaces in the environment variable
3. Ensure you're using the correct secret (test vs. live mode)
4. If you regenerated the secret, ensure environment variable is updated

---

### Issue 3: Server Error (500)

**Symptoms**:
- Webhook delivery shows `500 Internal Server Error`
- Response body shows error message

**Solutions**:
1. Check application logs for detailed error messages
2. Verify database connection is working
3. Check that all required environment variables are set
4. Verify Prisma client is generated and database migrations are run
5. Check for code errors in webhook handler

---

### Issue 4: Timeout

**Symptoms**:
- Webhook delivery shows timeout error
- Response time is very long (> 30 seconds)

**Solutions**:
1. Check application performance and optimize slow queries
2. Verify database connection is not slow
3. Check if email sending is blocking the webhook (should be async)
4. Review webhook handler code for performance bottlenecks
5. Consider increasing timeout limits if legitimate processing takes time

---

### Issue 5: Webhook Not Received

**Symptoms**:
- No webhook delivery appears in Stripe Dashboard
- Order is created but webhook never fires

**Solutions**:
1. Verify webhook endpoint is enabled in Stripe Dashboard
2. Check that `checkout.session.completed` event is subscribed
3. Verify you're checking the correct Stripe mode (test vs. live)
4. Check if webhook endpoint URL is correct
5. Ensure the checkout session was completed successfully

---

### Issue 6: Duplicate Orders

**Symptoms**:
- Multiple orders created for the same payment
- Webhook is processed multiple times

**Solutions**:
1. Verify idempotency checks in webhook handler (checking for existing order by `stripeSessionId`)
2. Check database unique constraint on `stripeSessionId` field
3. Review webhook retry logic - Stripe retries failed webhooks
4. Ensure webhook handler returns 200 OK after successful processing

---

## Additional Verification Steps

### Verify Test Mode vs. Live Mode

1. **Test Mode Configuration**:
   - Create a separate webhook endpoint for test mode
   - Use test Stripe keys (`pk_test_...`, `sk_test_...`)
   - Use test webhook secret (`whsec_test_...`)
   - Test with test cards (`4242 4242 4242 4242`)

2. **Live Mode Configuration**:
   - Create a separate webhook endpoint for live mode
   - Use live Stripe keys (`pk_live_...`, `sk_live_...`)
   - Use live webhook secret (`whsec_...`)
   - Test with small real transactions

3. **Important**: Never mix test and live mode configurations

---

### Verify Webhook Endpoint Accessibility

1. **Test endpoint is reachable**:
   ```bash
   curl -X POST https://yourdomain.com/api/webhooks \
     -H "Content-Type: application/json" \
     -d '{"test": "data"}'
   ```
   - Should return a response (even if it's an error about invalid signature)

2. **Check SSL certificate**:
   ```bash
   openssl s_client -connect yourdomain.com:443
   ```
   - Should show valid certificate
   - Should not show certificate errors

---

### Verify Application Logs

1. **Check webhook processing logs**:
   - Look for "Webhook event received" log messages
   - Check for "Order created successfully" messages
   - Look for any error messages

2. **Common log messages to look for**:
   - `Webhook event received: { type: 'checkout.session.completed', id: '...' }`
   - `Processing order for session: cs_test_...`
   - `Order created successfully: ORD-...`
   - `Customer email sent in ... ms`
   - `Owner email sent in ... ms`

---

## Next Steps

After completing this verification:

1. **Document your configuration**:
   - Note the webhook endpoint URL
   - Note the signing secret (store securely)
   - Document any custom configuration

2. **Set up monitoring**:
   - Monitor webhook delivery success rate
   - Set up alerts for webhook failures
   - Track webhook response times

3. **Regular verification**:
   - Periodically check webhook delivery status
   - Verify webhook endpoint is still enabled
   - Check for any configuration changes

4. **Proceed to Phase 2** (if applicable):
   - Once webhook configuration is verified, proceed with any code improvements
   - Implement automatic retry mechanism on return page
   - Add webhook delivery status monitoring

---

## Summary

This verification guide ensures that:

✅ **Webhook endpoint is configured** in Stripe Dashboard  
✅ **Correct events are subscribed** (`checkout.session.completed`)  
✅ **Webhook signing secret matches** environment variable  
✅ **Webhook endpoint is accessible** and responding correctly  
✅ **Webhooks are being delivered** successfully  
✅ **Orders are being created** when webhooks are received  

**Important**: This is a configuration verification step. If all checks pass but orders are still not appearing, the issue may be in the webhook handler code or database connection, which would require further investigation.

---

**Last Updated**: [Current Date]  
**Version**: 1.0  
**Related Files**: 
- `app/api/webhooks/route.js` - Webhook handler implementation
- `app/return/page.tsx` - Return page that displays order confirmation
- `DEPLOYMENT_CHECKLIST.md` - Deployment instructions
- `TESTING_GUIDE.md` - Testing procedures

