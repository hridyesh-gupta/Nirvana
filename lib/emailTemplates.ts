// Email template generation for order confirmations and notifications
import { OrderEmailData } from './types/order';

/**
 * Generate HTML email template for customer order confirmation
 * @param orderData - Order information to include in the email
 * @returns HTML string for the email body
 */
export const generateCustomerOrderEmail = (orderData: OrderEmailData): string => {
  const formatCurrency = (amount: number) => `CHF ${amount.toFixed(2)}`;
  const formatDate = (date: Date) => date.toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const orderDate = orderData.createdAt ? formatDate(orderData.createdAt) : 'Today';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Confirmation - Nirvana Restaurant</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8f9fa;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%); padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">Nirvana Restaurant</h1>
            <p style="color: #f5f5f5; margin: 10px 0 0 0; font-size: 16px;">Authentic Indian Cuisine in Geneva</p>
        </div>

        <!-- Main Content -->
        <div style="padding: 30px;">
            <!-- Order Confirmation -->
            <div style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #8B4513; margin: 0 0 10px 0; font-size: 24px;">Order Confirmed!</h2>
                <p style="color: #666666; margin: 0; font-size: 16px;">Thank you for your order, ${orderData.customerName}</p>
                <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
                    <p style="margin: 0; font-size: 18px; font-weight: bold; color: #8B4513;">Order #${orderData.orderNumber}</p>
                    <p style="margin: 5px 0 0 0; color: #666666;">Placed on ${orderDate}</p>
                </div>
            </div>

            <!-- Customer Details -->
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <h3 style="color: #8B4513; margin: 0 0 15px 0; font-size: 18px;">Customer Information</h3>
                <p style="margin: 5px 0; color: #333333;"><strong>Name:</strong> ${orderData.customerName}</p>
                <p style="margin: 5px 0; color: #333333;"><strong>Email:</strong> ${orderData.customerEmail}</p>
                <p style="margin: 5px 0; color: #333333;"><strong>Phone:</strong> ${orderData.customerPhone}</p>
            </div>

            <!-- Order Type -->
            <div style="text-align: center; margin-bottom: 25px;">
                <span style="background-color: ${orderData.orderType === 'delivery' ? '#28a745' : '#007bff'}; color: white; padding: 8px 16px; border-radius: 20px; font-weight: bold; text-transform: uppercase;">
                    ${orderData.orderType === 'delivery' ? '🚚 Delivery' : '🏪 Pickup'}
                </span>
            </div>

            ${orderData.orderType === 'delivery' && orderData.deliveryAddress ? `
            <!-- Delivery Address -->
            <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #28a745;">
                <h3 style="color: #28a745; margin: 0 0 10px 0; font-size: 18px;">Delivery Address</h3>
                <p style="margin: 0; color: #333333; line-height: 1.5;">${orderData.deliveryAddress}</p>
            </div>
            ` : ''}

            <!-- Order Items -->
            <div style="margin-bottom: 25px;">
                <h3 style="color: #8B4513; margin: 0 0 15px 0; font-size: 18px;">Your Order</h3>
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="background-color: #f8f9fa;">
                            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #dee2e6; color: #8B4513;">Item</th>
                            <th style="padding: 12px; text-align: center; border-bottom: 2px solid #dee2e6; color: #8B4513;">Qty</th>
                            <th style="padding: 12px; text-align: right; border-bottom: 2px solid #dee2e6; color: #8B4513;">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${orderData.items.map(item => `
                        <tr>
                            <td style="padding: 12px; border-bottom: 1px solid #dee2e6;">
                                <div style="font-weight: bold; color: #333333;">${item.name}</div>
                                ${item.selectedSauce ? `<div style="font-size: 14px; color: #666666; margin-top: 2px;">Sauce: ${item.selectedSauce}</div>` : ''}
                                ${item.selectedFlavor ? `<div style="font-size: 14px; color: #666666; margin-top: 2px;">Flavor: ${item.selectedFlavor}</div>` : ''}
                                ${item.selectedMixOption ? `<div style="font-size: 14px; color: #666666; margin-top: 2px;">Mix: ${item.selectedMixOption}</div>` : ''}
                            </td>
                            <td style="padding: 12px; text-align: center; border-bottom: 1px solid #dee2e6; color: #333333;">${item.quantity}</td>
                            <td style="padding: 12px; text-align: right; border-bottom: 1px solid #dee2e6; color: #333333;">${formatCurrency(item.price * item.quantity)}</td>
                        </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>

            <!-- Pricing Breakdown -->
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <h3 style="color: #8B4513; margin: 0 0 15px 0; font-size: 18px;">Order Summary</h3>
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="color: #333333;">Subtotal:</span>
                    <span style="color: #333333;">${formatCurrency(orderData.subtotal)}</span>
                </div>
                ${orderData.deliveryFee > 0 ? `
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="color: #333333;">Delivery Fee:</span>
                    <span style="color: #333333;">${formatCurrency(orderData.deliveryFee)}</span>
                </div>
                ` : ''}
                ${orderData.discount > 0 ? `
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="color: #28a745;">Discount:</span>
                    <span style="color: #28a745;">-${formatCurrency(orderData.discount)}</span>
                </div>
                ` : ''}
                <hr style="border: none; border-top: 2px solid #dee2e6; margin: 15px 0;">
                <div style="display: flex; justify-content: space-between;">
                    <span style="font-weight: bold; font-size: 18px; color: #8B4513;">Total:</span>
                    <span style="font-weight: bold; font-size: 18px; color: #8B4513;">${formatCurrency(orderData.total)}</span>
                </div>
            </div>

            ${orderData.specialInstructions ? `
            <!-- Special Instructions -->
            <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #ffc107;">
                <h3 style="color: #856404; margin: 0 0 10px 0; font-size: 18px;">Special Instructions</h3>
                <p style="margin: 0; color: #856404; line-height: 1.5;">${orderData.specialInstructions}</p>
            </div>
            ` : ''}

            <!-- Payment Information -->
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <h3 style="color: #8B4513; margin: 0 0 15px 0; font-size: 18px;">Payment Information</h3>
                <p style="margin: 5px 0; color: #333333;"><strong>Method:</strong> ${orderData.paymentMethod === 'stripe' ? 'Credit/Debit Card' : 'Cash on Delivery'}</p>
                <p style="margin: 5px 0; color: #333333;"><strong>Status:</strong> 
                    <span style="color: ${orderData.paymentStatus === 'paid' ? '#28a745' : orderData.paymentStatus === 'pending' ? '#ffc107' : '#dc3545'}; font-weight: bold;">
                        ${orderData.paymentStatus === 'paid' ? '✅ Paid' : orderData.paymentStatus === 'pending' ? '⏳ Pending' : '❌ Failed'}
                    </span>
                </p>
            </div>

            <!-- Next Steps -->
            <div style="text-align: center; margin-bottom: 25px;">
                <h3 style="color: #8B4513; margin: 0 0 15px 0; font-size: 18px;">What's Next?</h3>
                ${orderData.orderType === 'delivery' ? `
                <p style="color: #666666; margin: 0; line-height: 1.5;">We'll prepare your order and deliver it to your address. You'll receive a notification when your order is out for delivery.</p>
                ` : `
                <p style="color: #666666; margin: 0; line-height: 1.5;">We'll prepare your order for pickup. You'll receive a notification when your order is ready for collection.</p>
                `}
            </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #8B4513; padding: 30px; text-align: center;">
            <h3 style="color: #ffffff; margin: 0 0 15px 0; font-size: 20px;">Thank You for Choosing Nirvana!</h3>
            <p style="color: #f5f5f5; margin: 0 0 15px 0; line-height: 1.5;">We appreciate your business and look forward to serving you delicious Indian cuisine.</p>
            <div style="margin-top: 20px;">
                <p style="color: #f5f5f5; margin: 5px 0; font-size: 14px;">📍 [Insert actual street address], Geneva, Switzerland</p>
                <p style="color: #f5f5f5; margin: 5px 0; font-size: 14px;">📞 [Insert actual phone number]</p>
                <p style="color: #f5f5f5; margin: 5px 0; font-size: 14px;">✉️ info@nirvana-geneve.ch</p>
            </div>
        </div>
    </div>
</body>
</html>
  `.trim();
};

/**
 * Generate HTML email template for restaurant owner order notification
 * @param orderData - Order information to include in the notification
 * @returns HTML string for the email body
 */
export const generateOwnerNotificationEmail = (orderData: OrderEmailData): string => {
  const formatCurrency = (amount: number) => `CHF ${amount.toFixed(2)}`;
  const formatDate = (date: Date) => date.toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const orderDate = orderData.createdAt ? formatDate(orderData.createdAt) : 'Just now';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Order - Nirvana Restaurant</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8f9fa;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #dc3545 0%, #c82333 100%); padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">🚨 NEW ORDER RECEIVED</h1>
            <p style="color: #f5f5f5; margin: 10px 0 0 0; font-size: 16px;">Nirvana Restaurant - Order Management</p>
        </div>

        <!-- Main Content -->
        <div style="padding: 30px;">
            <!-- Order Alert -->
            <div style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #dc3545; margin: 0 0 10px 0; font-size: 24px;">Order #${orderData.orderNumber}</h2>
                <p style="color: #666666; margin: 0; font-size: 16px;">Received on ${orderDate}</p>
                <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
                    <p style="margin: 0; font-size: 18px; font-weight: bold; color: #856404;">Action Required: Please prepare this order</p>
                </div>
            </div>

            <!-- Customer Contact Info (Highlighted) -->
            <div style="background-color: #d1ecf1; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #17a2b8;">
                <h3 style="color: #0c5460; margin: 0 0 15px 0; font-size: 18px;">📞 Customer Contact Information</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                    <div>
                        <p style="margin: 5px 0; color: #0c5460;"><strong>Name:</strong> ${orderData.customerName}</p>
                        <p style="margin: 5px 0; color: #0c5460;"><strong>Phone:</strong> <a href="tel:${orderData.customerPhone}" style="color: #0c5460; text-decoration: none;">${orderData.customerPhone}</a></p>
                    </div>
                    <div>
                        <p style="margin: 5px 0; color: #0c5460;"><strong>Email:</strong> <a href="mailto:${orderData.customerEmail}" style="color: #0c5460; text-decoration: none;">${orderData.customerEmail}</a></p>
                    </div>
                </div>
            </div>

            <!-- Order Type (Highlighted for Delivery) -->
            <div style="text-align: center; margin-bottom: 25px;">
                <span style="background-color: ${orderData.orderType === 'delivery' ? '#dc3545' : '#007bff'}; color: white; padding: 12px 24px; border-radius: 25px; font-weight: bold; text-transform: uppercase; font-size: 16px;">
                    ${orderData.orderType === 'delivery' ? '🚚 DELIVERY ORDER' : '🏪 PICKUP ORDER'}
                </span>
            </div>

            ${orderData.orderType === 'delivery' && orderData.deliveryAddress ? `
            <!-- Delivery Address (Highlighted) -->
            <div style="background-color: #f8d7da; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #dc3545;">
                <h3 style="color: #721c24; margin: 0 0 10px 0; font-size: 18px;">📍 Delivery Address</h3>
                <p style="margin: 0; color: #721c24; line-height: 1.5; font-size: 16px; font-weight: bold;">${orderData.deliveryAddress}</p>
                <p style="margin: 10px 0 0 0; color: #721c24; font-size: 14px;">📋 Copy this address for delivery driver</p>
            </div>
            ` : ''}

            <!-- Order Items -->
            <div style="margin-bottom: 25px;">
                <h3 style="color: #8B4513; margin: 0 0 15px 0; font-size: 18px;">📋 Order Details</h3>
                <table style="width: 100%; border-collapse: collapse; border: 2px solid #dee2e6;">
                    <thead>
                        <tr style="background-color: #8B4513;">
                            <th style="padding: 12px; text-align: left; color: white; border: 1px solid #dee2e6;">Item</th>
                            <th style="padding: 12px; text-align: center; color: white; border: 1px solid #dee2e6;">Qty</th>
                            <th style="padding: 12px; text-align: right; color: white; border: 1px solid #dee2e6;">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${orderData.items.map(item => `
                        <tr>
                            <td style="padding: 12px; border: 1px solid #dee2e6;">
                                <div style="font-weight: bold; color: #333333;">${item.name}</div>
                                ${item.selectedSauce ? `<div style="font-size: 14px; color: #666666; margin-top: 2px;">🔸 Sauce: ${item.selectedSauce}</div>` : ''}
                                ${item.selectedFlavor ? `<div style="font-size: 14px; color: #666666; margin-top: 2px;">🔸 Flavor: ${item.selectedFlavor}</div>` : ''}
                                ${item.selectedMixOption ? `<div style="font-size: 14px; color: #666666; margin-top: 2px;">🔸 Mix: ${item.selectedMixOption}</div>` : ''}
                            </td>
                            <td style="padding: 12px; text-align: center; border: 1px solid #dee2e6; color: #333333; font-weight: bold;">${item.quantity}</td>
                            <td style="padding: 12px; text-align: right; border: 1px solid #dee2e6; color: #333333;">${formatCurrency(item.price * item.quantity)}</td>
                        </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>

            <!-- Pricing Breakdown -->
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px; border: 2px solid #8B4513;">
                <h3 style="color: #8B4513; margin: 0 0 15px 0; font-size: 18px;">💰 Order Summary</h3>
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="color: #333333;">Subtotal:</span>
                    <span style="color: #333333;">${formatCurrency(orderData.subtotal)}</span>
                </div>
                ${orderData.deliveryFee > 0 ? `
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="color: #333333;">Delivery Fee:</span>
                    <span style="color: #333333;">${formatCurrency(orderData.deliveryFee)}</span>
                </div>
                ` : ''}
                ${orderData.discount > 0 ? `
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span style="color: #28a745;">Discount:</span>
                    <span style="color: #28a745;">-${formatCurrency(orderData.discount)}</span>
                </div>
                ` : ''}
                <hr style="border: none; border-top: 2px solid #8B4513; margin: 15px 0;">
                <div style="display: flex; justify-content: space-between;">
                    <span style="font-weight: bold; font-size: 20px; color: #8B4513;">TOTAL:</span>
                    <span style="font-weight: bold; font-size: 20px; color: #8B4513;">${formatCurrency(orderData.total)}</span>
                </div>
            </div>

            ${orderData.specialInstructions ? `
            <!-- Special Instructions (Highlighted) -->
            <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #ffc107;">
                <h3 style="color: #856404; margin: 0 0 10px 0; font-size: 18px;">⚠️ Special Instructions</h3>
                <p style="margin: 0; color: #856404; line-height: 1.5; font-weight: bold;">${orderData.specialInstructions}</p>
            </div>
            ` : ''}

            <!-- Payment Information -->
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <h3 style="color: #8B4513; margin: 0 0 15px 0; font-size: 18px;">💳 Payment Information</h3>
                <p style="margin: 5px 0; color: #333333;"><strong>Method:</strong> ${orderData.paymentMethod === 'stripe' ? 'Credit/Debit Card (Paid Online)' : 'Cash on Delivery'}</p>
                <p style="margin: 5px 0; color: #333333;"><strong>Status:</strong> 
                    <span style="color: ${orderData.paymentStatus === 'paid' ? '#28a745' : orderData.paymentStatus === 'pending' ? '#ffc107' : '#dc3545'}; font-weight: bold;">
                        ${orderData.paymentStatus === 'paid' ? '✅ PAID' : orderData.paymentStatus === 'pending' ? '⏳ PENDING PAYMENT' : '❌ PAYMENT FAILED'}
                    </span>
                </p>
                ${orderData.paymentMethod === 'cod' ? `
                <p style="margin: 10px 0 0 0; color: #dc3545; font-weight: bold;">💰 Collect ${formatCurrency(orderData.total)} from customer</p>
                ` : ''}
            </div>

            <!-- Action Required -->
            <div style="background-color: #d4edda; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #28a745;">
                <h3 style="color: #155724; margin: 0 0 15px 0; font-size: 18px;">✅ Action Required</h3>
                <ul style="margin: 0; padding-left: 20px; color: #155724;">
                    <li>Prepare the order items according to specifications</li>
                    ${orderData.orderType === 'delivery' ? '<li>Coordinate with delivery driver</li>' : '<li>Notify customer when order is ready for pickup</li>'}
                    ${orderData.paymentMethod === 'cod' ? '<li>Collect payment upon delivery/pickup</li>' : ''}
                    <li>Update order status in the system</li>
                </ul>
            </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #8B4513; padding: 30px; text-align: center;">
            <h3 style="color: #ffffff; margin: 0 0 15px 0; font-size: 20px;">Nirvana Restaurant - Order Management</h3>
            <p style="color: #f5f5f5; margin: 0; line-height: 1.5;">This is an automated notification. Please prepare the order promptly.</p>
        </div>
    </div>
</body>
</html>
  `.trim();
};

/**
 * Generate plain text version of customer order email
 * @param orderData - Order information
 * @returns Plain text string for email fallback
 */
export const generateCustomerOrderEmailText = (orderData: OrderEmailData): string => {
  const formatCurrency = (amount: number) => `CHF ${amount.toFixed(2)}`;
  
  return `
ORDER CONFIRMATION - Nirvana Restaurant

Order #${orderData.orderNumber}
Customer: ${orderData.customerName}
Email: ${orderData.customerEmail}
Phone: ${orderData.customerPhone}
Order Type: ${orderData.orderType.toUpperCase()}

${orderData.orderType === 'delivery' && orderData.deliveryAddress ? `Delivery Address: ${orderData.deliveryAddress}` : ''}

ORDER ITEMS:
${orderData.items.map(item => 
  `- ${item.name} (Qty: ${item.quantity}) - ${formatCurrency(item.price * item.quantity)}${item.selectedSauce ? ` | Sauce: ${item.selectedSauce}` : ''}${item.selectedFlavor ? ` | Flavor: ${item.selectedFlavor}` : ''}${item.selectedMixOption ? ` | Mix: ${item.selectedMixOption}` : ''}`
).join('\n')}

ORDER SUMMARY:
Subtotal: ${formatCurrency(orderData.subtotal)}
${orderData.deliveryFee > 0 ? `Delivery Fee: ${formatCurrency(orderData.deliveryFee)}` : ''}
${orderData.discount > 0 ? `Discount: -${formatCurrency(orderData.discount)}` : ''}
TOTAL: ${formatCurrency(orderData.total)}

Payment Method: ${orderData.paymentMethod === 'stripe' ? 'Credit/Debit Card' : 'Cash on Delivery'}
Payment Status: ${orderData.paymentStatus.toUpperCase()}

${orderData.specialInstructions ? `Special Instructions: ${orderData.specialInstructions}` : ''}

Thank you for choosing Nirvana Restaurant!
We appreciate your business and look forward to serving you delicious Indian cuisine.

Nirvana Restaurant
[Insert actual street address], Geneva, Switzerland
[Insert actual phone number]
  `.trim();
};

/**
 * Generate plain text version of owner notification email
 * @param orderData - Order information
 * @returns Plain text string for email fallback
 */
export const generateOwnerNotificationEmailText = (orderData: OrderEmailData): string => {
  const formatCurrency = (amount: number) => `CHF ${amount.toFixed(2)}`;
  
  return `
NEW ORDER RECEIVED - Nirvana Restaurant

Order #${orderData.orderNumber}
Received: ${orderData.createdAt ? orderData.createdAt.toLocaleString() : 'Just now'}

CUSTOMER CONTACT:
Name: ${orderData.customerName}
Phone: ${orderData.customerPhone}
Email: ${orderData.customerEmail}

Order Type: ${orderData.orderType.toUpperCase()}
${orderData.orderType === 'delivery' && orderData.deliveryAddress ? `Delivery Address: ${orderData.deliveryAddress}` : ''}

ORDER ITEMS:
${orderData.items.map(item => 
  `- ${item.name} (Qty: ${item.quantity}) - ${formatCurrency(item.price * item.quantity)}${item.selectedSauce ? ` | Sauce: ${item.selectedSauce}` : ''}${item.selectedFlavor ? ` | Flavor: ${item.selectedFlavor}` : ''}${item.selectedMixOption ? ` | Mix: ${item.selectedMixOption}` : ''}`
).join('\n')}

ORDER SUMMARY:
Subtotal: ${formatCurrency(orderData.subtotal)}
${orderData.deliveryFee > 0 ? `Delivery Fee: ${formatCurrency(orderData.deliveryFee)}` : ''}
${orderData.discount > 0 ? `Discount: -${formatCurrency(orderData.discount)}` : ''}
TOTAL: ${formatCurrency(orderData.total)}

Payment Method: ${orderData.paymentMethod === 'stripe' ? 'Credit/Debit Card (Paid Online)' : 'Cash on Delivery'}
Payment Status: ${orderData.paymentStatus.toUpperCase()}
${orderData.paymentMethod === 'cod' ? `Collect: ${formatCurrency(orderData.total)}` : ''}

${orderData.specialInstructions ? `Special Instructions: ${orderData.specialInstructions}` : ''}

ACTION REQUIRED: Please prepare this order promptly.
  `.trim();
};
