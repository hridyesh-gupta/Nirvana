import { Decimal } from '@prisma/client/runtime/library'

/**
 * Converts Prisma Decimal objects to JSON-safe numbers for API responses
 * Prisma returns Decimal objects for DECIMAL fields, which are not JSON serializable
 * Use this helper to convert monetary fields before sending API responses
 */

export function serializeDecimal(value: Decimal | null | undefined): number | null {
  if (value === null || value === undefined) {
    return null
  }
  return Number(value)
}

export function serializeOrderForAPI(order: any) {
  return {
    ...order,
    subtotal: serializeDecimal(order.subtotal),
    deliveryFee: serializeDecimal(order.deliveryFee),
    discount: serializeDecimal(order.discount),
    total: serializeDecimal(order.total),
    items: order.items?.map((item: any) => ({
      ...item,
      price: serializeDecimal(item.price)
    }))
  }
}

export function serializeOrderItemForAPI(item: any) {
  return {
    ...item,
    price: serializeDecimal(item.price)
  }
}

/**
 * Example usage in API routes:
 * 
 * // GET /api/orders/[id]
 * const order = await prisma.order.findUnique({
 *   where: { id: orderId },
 *   include: { items: true }
 * })
 * 
 * return Response.json(serializeOrderForAPI(order))
 * 
 * // POST /api/orders
 * const newOrder = await prisma.order.create({
 *   data: orderData,
 *   include: { items: true }
 * })
 * 
 * return Response.json(serializeOrderForAPI(newOrder))
 */
