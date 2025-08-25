
'use client';

import { useState, useEffect } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

class CartStore {
  private listeners: Set<() => void> = new Set();
  private items: CartItem[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nirvana-cart');
      if (saved) {
        this.items = JSON.parse(saved);
      }
    }
  }

  private save() {
    if (typeof window !== 'undefined') {
      localStorage.setItem('nirvana-cart', JSON.stringify(this.items));
    }
  }

  private notify() {
    this.listeners.forEach(listener => listener());
  }

  subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => { void this.listeners.delete(listener); };
  }

  getItems(): CartItem[] {
    return [...this.items];
  }

  getItemCount(): number {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  addItem(item: Omit<CartItem, 'quantity'>) {
    const existingIndex = this.items.findIndex(cartItem => cartItem.id === item.id);
    
    if (existingIndex >= 0) {
      this.items[existingIndex].quantity += 1;
    } else {
      this.items.push({ ...item, quantity: 1 });
    }
    
    this.save();
    this.notify();
  }

  updateQuantity(id: string, quantity: number) {
    if (quantity <= 0) {
      this.items = this.items.filter(item => item.id !== id);
    } else {
      const itemIndex = this.items.findIndex(item => item.id === id);
      if (itemIndex >= 0) {
        this.items[itemIndex].quantity = quantity;
      }
    }
    
    this.save();
    this.notify();
  }

  clearCart() {
    this.items = [];
    this.save();
    this.notify();
  }
}

export const cartStore = new CartStore();

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const updateState = () => {
      setItems(cartStore.getItems());
      setItemCount(cartStore.getItemCount());
    };

    updateState();
    return cartStore.subscribe(updateState);
  }, []);

  return {
    items,
    itemCount,
    addItem: (item: Omit<CartItem, 'quantity'>) => cartStore.addItem(item),
    updateQuantity: (id: string, quantity: number) => cartStore.updateQuantity(id, quantity),
    clearCart: () => cartStore.clearCart()
  };
}