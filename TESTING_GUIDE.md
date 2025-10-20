# Testing Guide for Nirvana Restaurant Ordering System

This comprehensive testing guide covers all test scenarios for the delivery ordering system.

## 1. Stripe Payment Flow Testing

### Test Cards (from Stripe documentation)
- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- **Requires authentication**: `4000 0025 0000 3155`
- **Insufficient funds**: `4000 0000 0000 9995`
- **Expired card**: `4000 0000 0000 0069`

### Test Steps
1. **Add items to cart** from menu page
2. **Navigate to cart page** (`/cart`)
3. **Fill in customer information**:
   - Name: Test Customer
   - Email: test@example.com
   - Phone: +41 22 123 45 67
4. **Select "Delivery" order type**
5. **Fill in delivery address**:
   - Address: Test Street 123
   - City: Geneva
   - Postal Code: 1200
6. **Select "Online (Stripe)" payment method**
7. **Add special instructions** (optional): "Please ring doorbell twice"
8. **Click "Pay Now"**
9. **Complete Stripe checkout** with test card `4242 4242 4242 4242`
10. **Verify redirect to return page** with order confirmation
11. **Check order appears in database**:
    ```sql
    SELECT * FROM orders WHERE orderNumber = 'ORDER_NUMBER';
    ```
12. **Verify customer email received**
13. **Verify owner email received**

### Expected Results
- ✅ Order created in database with `paymentStatus: 'paid'`
- ✅ Customer receives confirmation email
- ✅ Owner receives notification email
- ✅ Return page displays order details correctly
- ✅ Cart is cleared after successful payment

## 2. COD Order Testing

### Delivery COD Order
1. **Add items to cart**
2. **Fill in customer information**
3. **Select "Delivery" order type**
4. **Fill in delivery address**
5. **Select "COD" payment method**
6. **Click "Place Order (COD)"**
7. **Verify success message** with order number
8. **Check cart is cleared**
9. **Verify order in database** with `paymentStatus: 'pending'`
10. **Check emails sent** (customer confirmation + owner notification)

### Pickup COD Order
1. **Add items to cart**
2. **Fill in customer information**
3. **Select "Pickup" order type**
4. **Select "COD" payment method** (should be available now)
5. **Click "Place Order (COD)"**
6. **Verify success message** with order number
7. **Check order in database** with `orderType: 'pickup'`

### Expected Results
- ✅ COD option available for both delivery and pickup
- ✅ Order created with `paymentStatus: 'pending'`
- ✅ Emails sent for COD orders
- ✅ Cart cleared after order placement

## 3. Form Validation Testing

### Customer Information Validation
- **Empty name**: Should show "Name is required"
- **Invalid email**: Should show "Please enter a valid email address"
  - Test cases: `invalid-email`, `test@`, `@domain.com`
- **Invalid phone**: Should show "Please enter a valid Swiss phone number"
  - Test cases: `123`, `+1 555 123 4567`, `abc-def-ghij`

### Delivery Address Validation
- **Empty address** (for delivery orders): Should show address validation errors
- **Empty city**: Should show "City is required"
- **Empty postal code**: Should show "Postal code is required"
- **Invalid postal code**: Should show "Please enter a valid postal code"

### Special Instructions Validation
- **Over 500 characters**: Should show character limit warning
- **Valid length**: Should accept up to 500 characters

### Expected Results
- ✅ All validation messages display correctly
- ✅ Form submission blocked until all validation passes
- ✅ Real-time validation feedback

## 4. Webhook Testing

### Using Stripe CLI
```bash
# Install Stripe CLI
stripe listen --forward-to localhost:3000/api/webhooks

# In another terminal, trigger test event
stripe trigger checkout.session.completed
```

### Manual Webhook Testing
1. **Place test order** with Stripe
2. **Check webhook received** in Stripe Dashboard → Webhooks
3. **Verify order created** in database
4. **Check emails sent**
5. **Test idempotency**: Send same webhook twice, should not create duplicate order

### Expected Results
- ✅ Webhook received and processed successfully
- ✅ Order created in database
- ✅ Emails sent
- ✅ No duplicate orders on webhook retry

## 5. Email Testing

### Manual Email Test
1. **Use test email endpoint**:
   ```bash
   curl -X POST http://localhost:3000/api/test-email \
     -H "Content-Type: application/json" \
     -H "X-Internal-Key: your_internal_api_key" \
     -d '{"to": "test@example.com", "type": "customer"}'
   ```
2. **Check email received** in inbox
3. **Verify HTML rendering** in email client
4. **Check all order details** are correct
5. **Test links in email** work correctly

### Email Template Testing
- **Customer confirmation email**: Should include order details, items, totals
- **Owner notification email**: Should include customer info, delivery address, items
- **HTML rendering**: Should display correctly in different email clients
- **Plain text fallback**: Should work for text-only email clients

### Expected Results
- ✅ Emails sent successfully
- ✅ HTML renders correctly
- ✅ All order information included
- ✅ Links work properly

## 6. Database Testing

### Order Creation
```sql
-- Check orders table
SELECT * FROM orders ORDER BY createdAt DESC LIMIT 10;

-- Check order items
SELECT * FROM OrderItem WHERE orderId = 'order-id-here';

-- Check for duplicate orders
SELECT stripeSessionId, COUNT(*) FROM orders 
GROUP BY stripeSessionId HAVING COUNT(*) > 1;
```

### Data Integrity
- **Order items**: Should be linked to correct order
- **Decimal precision**: Prices should maintain 2 decimal places
- **Timestamps**: Should be set correctly
- **Foreign keys**: Should maintain referential integrity

### Expected Results
- ✅ Orders created with correct data
- ✅ Order items linked properly
- ✅ No duplicate orders
- ✅ Data types correct

## 7. Error Handling Testing

### Database Connection Failure
1. **Stop database service**
2. **Try to place order**
3. **Verify error handling** and user feedback

### SMTP Server Unavailable
1. **Use invalid SMTP credentials**
2. **Place test order**
3. **Check error logging** and fallback behavior

### Stripe API Error
1. **Use invalid Stripe keys**
2. **Try to create checkout session**
3. **Verify error handling**

### Invalid Webhook Signature
1. **Send webhook with wrong signature**
2. **Verify webhook rejected**
3. **Check error logging**

### Malformed Request Data
1. **Send invalid JSON to API endpoints**
2. **Verify proper error responses**
3. **Check error logging**

### Expected Results
- ✅ Graceful error handling
- ✅ User-friendly error messages
- ✅ Proper error logging
- ✅ System remains stable

## 8. Edge Cases Testing

### Large Orders
- **Cart with many items** (test metadata serialization)
- **Very long special instructions** (500 characters)
- **Multiple customizations** per item

### Concurrent Operations
- **Multiple orders from same customer** simultaneously
- **Webhook received before page redirect**
- **Browser back button after order**

### Network Issues
- **Slow network connection**
- **Request timeout**
- **Partial form submission**

### Browser Compatibility
- **Different browsers** (Chrome, Firefox, Safari, Edge)
- **Mobile devices** (iOS, Android)
- **Different screen sizes**

### Expected Results
- ✅ System handles edge cases gracefully
- ✅ No data corruption
- ✅ Consistent behavior across browsers
- ✅ Mobile-friendly interface

## 9. Performance Testing

### Load Testing
- **Multiple concurrent orders**
- **Large number of items in cart**
- **Database query performance**

### Response Times
- **Page load times** should be < 3 seconds
- **API response times** should be < 1 second
- **Email sending** should complete within 30 seconds

### Expected Results
- ✅ System performs well under load
- ✅ Response times within acceptable limits
- ✅ No memory leaks or performance degradation

## 10. Security Testing

### Input Validation
- **SQL injection attempts**
- **XSS attacks**
- **CSRF protection**

### Authentication
- **API key validation**
- **Webhook signature verification**
- **Rate limiting**

### Data Protection
- **Sensitive data encryption**
- **Secure data transmission**
- **Proper error messages** (no sensitive info leaked)

### Expected Results
- ✅ System secure against common attacks
- ✅ Proper input validation
- ✅ Secure data handling

## 11. Integration Testing

### End-to-End Flow
1. **Complete order flow** from menu to confirmation
2. **Test all payment methods**
3. **Verify all email notifications**
4. **Check order tracking functionality**

### Third-Party Services
- **Stripe integration** working correctly
- **SMTP email service** functioning
- **Database connectivity** stable

### Expected Results
- ✅ All integrations working properly
- ✅ End-to-end flow complete
- ✅ No integration failures

## 12. Regression Testing

### After Code Changes
- **Re-run critical test cases**
- **Verify existing functionality** still works
- **Check for new bugs introduced**

### Database Migrations
- **Test migration scripts**
- **Verify data integrity** after migration
- **Check rollback procedures**

### Expected Results
- ✅ No regression in existing functionality
- ✅ New features work correctly
- ✅ Database migrations successful

## 13. User Acceptance Testing

### Customer Experience
- **Order placement** is intuitive
- **Payment process** is smooth
- **Email confirmations** are clear
- **Order tracking** is helpful

### Restaurant Owner Experience
- **Order notifications** are timely
- **Order details** are complete
- **Customer information** is accurate

### Expected Results
- ✅ Positive user experience
- ✅ All requirements met
- ✅ Ready for production deployment

## 14. Production Readiness Checklist

### Pre-Deployment
- [ ] All test cases pass
- [ ] Environment variables configured
- [ ] Database migrations run
- [ ] Email service tested
- [ ] Stripe webhooks configured
- [ ] Error monitoring set up

### Post-Deployment
- [ ] Health check endpoint working
- [ ] Test order placed successfully
- [ ] Emails received
- [ ] Database records created
- [ ] Webhook processing correctly
- [ ] Performance monitoring active

### Expected Results
- ✅ System ready for production
- ✅ All components functioning
- ✅ Monitoring in place
- ✅ Rollback plan ready

---

**Note**: This testing guide should be executed thoroughly before deploying to production. Keep detailed logs of all test results and any issues found.
