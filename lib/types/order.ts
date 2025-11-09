// Shared order data types for email templates and API communication

export interface OrderEmailData {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  orderType: 'delivery' | 'pickup';
  items: Array<{
    name: string;
    quantity: number;
    price: number;
    selectedSauce?: string;
    selectedFlavor?: string;
    selectedMixOption?: string;
  }>;
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  deliveryAddress?: string;
  postalCode?: string;
  specialInstructions?: string;
  paymentMethod: 'stripe' | 'cod';
  paymentStatus: 'pending' | 'paid' | 'failed';
  createdAt?: Date;
}

export interface ReservationEmailData {
  reservationNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  reservationDate: Date;
  reservationTime: string;
  numberOfGuests: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt?: Date;
  specialRequests?: string;
}