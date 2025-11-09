// Email template generation for order confirmations and notifications
import { OrderEmailData, ReservationEmailData } from './types/order';

const renderDeliveryAddress = (
  orderData: OrderEmailData,
  audience: 'customer' | 'owner',
  format: 'html' | 'text'
): string => {
  if (orderData.orderType !== 'delivery' || !orderData.deliveryAddress) {
    return '';
  }

  if (format === 'html') {
    if (audience === 'customer') {
      return `
            <!-- Delivery Address -->
            <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #28a745;">
                <h3 style="color: #28a745; margin: 0 0 10px 0; font-size: 18px;">Delivery Address</h3>
                ${orderData.postalCode ? `<p style="margin: 0 0 8px 0; color: #28a745; font-weight: bold; font-size: 16px;">📍 Delivery Zone: ${orderData.postalCode}</p>` : ''}
                <p style="margin: 0; color: #333333; line-height: 1.5;">${orderData.deliveryAddress}</p>
            </div>
            `;
    }

    return `
            <!-- Delivery Address (Highlighted) -->
            <div style="background-color: #f8d7da; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #dc3545;">
                <h3 style="color: #721c24; margin: 0 0 10px 0; font-size: 18px;">📍 Delivery Address</h3>
                ${orderData.postalCode ? `<p style="margin: 0 0 10px 0; color: #721c24; font-weight: bold; font-size: 18px;">🏷️ DELIVERY ZONE: ${orderData.postalCode}</p>` : ''}
                <p style="margin: 0; color: #721c24; line-height: 1.5; font-size: 16px; font-weight: bold;">${orderData.deliveryAddress}</p>
                <p style="margin: 10px 0 0 0; color: #721c24; font-size: 14px;">📋 Copy this address for delivery driver</p>
            </div>
            `;
  }

  if (audience === 'customer') {
    return `${orderData.postalCode ? `Delivery Zone: ${orderData.postalCode}\n` : ''}Delivery Address: ${orderData.deliveryAddress}`;
  }

  return `${orderData.postalCode ? `DELIVERY ZONE: ${orderData.postalCode}` : ''}Delivery Address: ${orderData.deliveryAddress}`;
};

/**
 * Generate HTML email template for customer order confirmation
 * @param orderData - Order information to include in the email
 * @returns HTML string for the email body
 */
export const generateCustomerOrderEmail = (orderData: OrderEmailData): string => {
  const formatCurrency = (amount: number) => `CHF ${amount.toFixed(2)}`;
  const formatDate = (date: Date) => date.toLocaleDateString('en-CH', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit', 
    timeZone: 'Europe/Zurich'
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

            ${renderDeliveryAddress(orderData, 'customer', 'html')}

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
                <p style="color: #666666; margin: 0; line-height: 1.5;">We'll prepare your order and deliver it to your address. We'll contact you when your order is out for delivery.</p>
                ` : `
                <p style="color: #666666; margin: 0; line-height: 1.5;">We'll prepare your order for pickup. We'll contact you when your order is ready for collection.</p>
                `}
            </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #8B4513; padding: 30px; text-align: center;">
            <h3 style="color: #ffffff; margin: 0 0 15px 0; font-size: 20px;">Thank You for Choosing Nirvana!</h3>
            <p style="color: #f5f5f5; margin: 0 0 15px 0; line-height: 1.5;">We appreciate your business and look forward to serving you delicious Indian cuisine.</p>
            <div style="margin-top: 20px;">
                <p style="color: #f5f5f5; margin: 5px 0; font-size: 14px;">📍 375, Route de Meyrin, 1217 Meyrin, Switzerland, Geneva, Switzerland</p>
                <p style="color: #f5f5f5; margin: 5px 0; font-size: 14px;">📞 022 782 10 10</p>
                <p style="color: #f5f5f5; margin: 5px 0; font-size: 14px;">✉️ contact@nirvana-geneve.ch</p>
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
  const formatDate = (date: Date) => date.toLocaleDateString('en-CH', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Zurich'
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

            ${renderDeliveryAddress(orderData, 'owner', 'html')}

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

${renderDeliveryAddress(orderData, 'customer', 'text')}

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
375, Route de Meyrin, 1217 Meyrin, Geneva, Switzerland
022 782 10 10
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
${renderDeliveryAddress(orderData, 'owner', 'text')}

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

/**
 * Generate HTML email template for customer reservation confirmation
 * @param reservationData - Reservation information to include in the email
 * @returns HTML string for the email body
 */
export const generateCustomerReservationEmail = (reservationData: ReservationEmailData): string => {
  const formatDate = (date: Date) => date.toLocaleDateString('en-CH', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Europe/Zurich'
  });

  const formatTime = (time: string) => {
    // Convert HH:MM to user-friendly format (e.g., "19:30" -> "7:30 PM")
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const reservationDateFormatted = formatDate(reservationData.reservationDate);
  const reservationTimeFormatted = formatTime(reservationData.reservationTime);
  const createdDate = reservationData.createdAt ? formatDate(reservationData.createdAt) : 'Today';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reservation Confirmation - Nirvana Restaurant</title>
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
            <!-- Reservation Confirmation -->
            <div style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #8B4513; margin: 0 0 10px 0; font-size: 24px;">Reservation Confirmed!</h2>
                <p style="color: #666666; margin: 0; font-size: 16px;">Thank you for your reservation, ${reservationData.customerName}</p>
                <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
                    <p style="margin: 0; font-size: 18px; font-weight: bold; color: #8B4513;">Reservation #${reservationData.reservationNumber}</p>
                    <p style="margin: 5px 0 0 0; color: #666666;">Requested on ${createdDate}</p>
                </div>
            </div>

            <!-- Customer Details -->
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <h3 style="color: #8B4513; margin: 0 0 15px 0; font-size: 18px;">Customer Information</h3>
                <p style="margin: 5px 0; color: #333333;"><strong>Name:</strong> ${reservationData.customerName}</p>
                <p style="margin: 5px 0; color: #333333;"><strong>Email:</strong> ${reservationData.customerEmail}</p>
                <p style="margin: 5px 0; color: #333333;"><strong>Phone:</strong> ${reservationData.customerPhone}</p>
            </div>

            <!-- Reservation Details -->
            <div style="background-color: #e8f5e8; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #28a745;">
                <h3 style="color: #28a745; margin: 0 0 15px 0; font-size: 18px;">Reservation Details</h3>
                <div style="margin-bottom: 15px;">
                    <p style="margin: 0 0 5px 0; color: #28a745; font-weight: bold; font-size: 16px;">📅 Date: ${reservationDateFormatted}</p>
                    <p style="margin: 0; color: #333333; font-size: 18px; font-weight: bold;">${reservationTimeFormatted}</p>
                </div>
                <div style="margin-top: 15px;">
                    <p style="margin: 0; color: #28a745; font-weight: bold; font-size: 16px;">👥 Number of Guests: ${reservationData.numberOfGuests}</p>
                </div>
            </div>

            ${reservationData.specialRequests ? `
            <!-- Special Requests -->
            <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #ffc107;">
                <h3 style="color: #856404; margin: 0 0 10px 0; font-size: 18px;">Special Requests</h3>
                <p style="margin: 0; color: #856404; line-height: 1.5;">${reservationData.specialRequests}</p>
            </div>
            ` : ''}

            <!-- What to Expect -->
            <div style="text-align: center; margin-bottom: 25px;">
                <h3 style="color: #8B4513; margin: 0 0 15px 0; font-size: 18px;">What to Expect</h3>
                <p style="color: #666666; margin: 0; line-height: 1.5;">We will contact you shortly to confirm your reservation. Please arrive on time for your table reservation.</p>
            </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #8B4513; padding: 30px; text-align: center;">
            <h3 style="color: #ffffff; margin: 0 0 15px 0; font-size: 20px;">Thank You for Choosing Nirvana!</h3>
            <p style="color: #f5f5f5; margin: 0 0 15px 0; line-height: 1.5;">We appreciate your business and look forward to serving you delicious Indian cuisine.</p>
            <div style="margin-top: 20px;">
                <p style="color: #f5f5f5; margin: 5px 0; font-size: 14px;">📍 375, Route de Meyrin, 1217 Meyrin, Switzerland, Geneva, Switzerland</p>
                <p style="color: #f5f5f5; margin: 5px 0; font-size: 14px;">📞 022 782 10 10</p>
                <p style="color: #f5f5f5; margin: 5px 0; font-size: 14px;">✉️ contact@nirvana-geneve.ch</p>
            </div>
        </div>
    </div>
</body>
</html>
  `.trim();
};

/**
 * Generate HTML email template for restaurant owner reservation notification
 * @param reservationData - Reservation information to include in the notification
 * @returns HTML string for the email body
 */
export const generateOwnerReservationNotificationEmail = (reservationData: ReservationEmailData): string => {
  const formatDate = (date: Date) => date.toLocaleDateString('en-CH', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Zurich'
  });

  const formatTime = (time: string) => {
    // Convert HH:MM to user-friendly format (e.g., "19:30" -> "7:30 PM")
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const reservationDateFormatted = formatDate(reservationData.reservationDate);
  const reservationTimeFormatted = formatTime(reservationData.reservationTime);
  const createdDate = reservationData.createdAt ? formatDate(reservationData.createdAt) : 'Just now';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Reservation - Nirvana Restaurant</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8f9fa;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #dc3545 0%, #c82333 100%); padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold;">🚨 NEW RESERVATION RECEIVED</h1>
            <p style="color: #f5f5f5; margin: 10px 0 0 0; font-size: 16px;">Nirvana Restaurant - Reservation Management</p>
        </div>

        <!-- Main Content -->
        <div style="padding: 30px;">
            <!-- Reservation Alert -->
            <div style="text-align: center; margin-bottom: 30px;">
                <h2 style="color: #dc3545; margin: 0 0 10px 0; font-size: 24px;">Reservation #${reservationData.reservationNumber}</h2>
                <p style="color: #666666; margin: 0; font-size: 16px;">Received on ${createdDate}</p>
                <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
                    <p style="margin: 0; font-size: 18px; font-weight: bold; color: #856404;">Action Required: Please confirm this reservation</p>
                </div>
            </div>

            <!-- Customer Contact Info (Highlighted) -->
            <div style="background-color: #d1ecf1; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #17a2b8;">
                <h3 style="color: #0c5460; margin: 0 0 15px 0; font-size: 18px;">📞 Customer Contact Information</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                    <div>
                        <p style="margin: 5px 0; color: #0c5460;"><strong>Name:</strong> ${reservationData.customerName}</p>
                        <p style="margin: 5px 0; color: #0c5460;"><strong>Phone:</strong> <a href="tel:${reservationData.customerPhone}" style="color: #0c5460; text-decoration: none;">${reservationData.customerPhone}</a></p>
                    </div>
                    <div>
                        <p style="margin: 5px 0; color: #0c5460;"><strong>Email:</strong> <a href="mailto:${reservationData.customerEmail}" style="color: #0c5460; text-decoration: none;">${reservationData.customerEmail}</a></p>
                    </div>
                </div>
            </div>

            <!-- Reservation Details (Prominent) -->
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px; border: 2px solid #8B4513;">
                <h3 style="color: #8B4513; margin: 0 0 15px 0; font-size: 18px;">📋 Reservation Details</h3>
                <div style="margin-bottom: 15px;">
                    <p style="margin: 0 0 5px 0; color: #8B4513; font-weight: bold; font-size: 20px;">📅 Date: ${reservationDateFormatted}</p>
                    <p style="margin: 0; color: #333333; font-size: 24px; font-weight: bold;">Time: ${reservationTimeFormatted}</p>
                </div>
                <div style="margin-top: 15px;">
                    <p style="margin: 0; color: #8B4513; font-weight: bold; font-size: 18px;">👥 Number of Guests: ${reservationData.numberOfGuests}</p>
                </div>
            </div>

            ${reservationData.specialRequests ? `
            <!-- Special Requests (Highlighted) -->
            <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #ffc107;">
                <h3 style="color: #856404; margin: 0 0 10px 0; font-size: 18px;">⚠️ Special Requests</h3>
                <p style="margin: 0; color: #856404; line-height: 1.5; font-weight: bold;">${reservationData.specialRequests}</p>
            </div>
            ` : ''}

            <!-- Action Required -->
            <div style="background-color: #d4edda; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #28a745;">
                <h3 style="color: #155724; margin: 0 0 15px 0; font-size: 18px;">✅ Action Required</h3>
                <ul style="margin: 0; padding-left: 20px; color: #155724;">
                    <li>Check availability for the requested date/time</li>
                    <li>Contact customer to confirm reservation</li>
                    <li>Update reservation status in the system</li>
                </ul>
            </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #8B4513; padding: 30px; text-align: center;">
            <h3 style="color: #ffffff; margin: 0 0 15px 0; font-size: 20px;">Nirvana Restaurant - Reservation Management</h3>
            <p style="color: #f5f5f5; margin: 0; line-height: 1.5;">This is an automated notification. Please confirm the reservation promptly.</p>
        </div>
    </div>
</body>
</html>
  `.trim();
};

/**
 * Generate plain text version of customer reservation email
 * @param reservationData - Reservation information
 * @returns Plain text string for email fallback
 */
export const generateCustomerReservationEmailText = (reservationData: ReservationEmailData): string => {
  const formatDate = (date: Date) => date.toLocaleDateString('en-CH', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Europe/Zurich'
  });

  const formatTime = (time: string) => {
    // Convert HH:MM to user-friendly format (e.g., "19:30" -> "7:30 PM")
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const reservationDateFormatted = formatDate(reservationData.reservationDate);
  const reservationTimeFormatted = formatTime(reservationData.reservationTime);

  return `
RESERVATION CONFIRMATION - Nirvana Restaurant

Reservation #${reservationData.reservationNumber}

Customer Details:
Name: ${reservationData.customerName}
Email: ${reservationData.customerEmail}
Phone: ${reservationData.customerPhone}

Reservation Details:
Date: ${reservationDateFormatted}
Time: ${reservationTimeFormatted}
Number of Guests: ${reservationData.numberOfGuests}
${reservationData.specialRequests ? `Special Requests: ${reservationData.specialRequests}` : ''}

We will contact you shortly to confirm your reservation.

Thank you for choosing Nirvana Restaurant!
We appreciate your business and look forward to serving you delicious Indian cuisine.

Nirvana Restaurant
375, Route de Meyrin, 1217 Meyrin, Geneva, Switzerland
Phone: 022 782 10 10
Email: contact@nirvana-geneve.ch
  `.trim();
};

/**
 * Generate plain text version of owner reservation notification email
 * @param reservationData - Reservation information
 * @returns Plain text string for email fallback
 */
export const generateOwnerReservationNotificationEmailText = (reservationData: ReservationEmailData): string => {
  const formatDate = (date: Date) => date.toLocaleDateString('en-CH', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Zurich'
  });

  const formatTime = (time: string) => {
    // Convert HH:MM to user-friendly format (e.g., "19:30" -> "7:30 PM")
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const reservationDateFormatted = formatDate(reservationData.reservationDate);
  const reservationTimeFormatted = formatTime(reservationData.reservationTime);
  const createdDate = reservationData.createdAt ? formatDate(reservationData.createdAt) : 'Just now';

  return `
NEW RESERVATION RECEIVED - Nirvana Restaurant

Reservation #${reservationData.reservationNumber}
Received: ${createdDate}

CUSTOMER CONTACT:
Name: ${reservationData.customerName}
Phone: ${reservationData.customerPhone}
Email: ${reservationData.customerEmail}

RESERVATION DETAILS:
Date: ${reservationDateFormatted}
Time: ${reservationTimeFormatted}
Number of Guests: ${reservationData.numberOfGuests}
${reservationData.specialRequests ? `Special Requests: ${reservationData.specialRequests}` : ''}

ACTION REQUIRED: Please confirm this reservation with the customer.
  `.trim();
};
