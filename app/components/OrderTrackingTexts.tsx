"use client";

import { useLanguage } from "../LanguageProvider";

const texts = {
  "header.title": {
    en: "Order Tracking",
    fr: "Suivi de commande",
  },
  "header.subtitle": {
    en: "Track your order status in real-time",
    fr: "Suivez le statut de votre commande en temps réel",
  },

  "customer.title": {
    en: "Customer Information",
    fr: "Informations client",
  },
  "customer.nameLabel": {
    en: "Name:",
    fr: "Nom :",
  },
  "customer.emailLabel": {
    en: "Email:",
    fr: "E-mail :",
  },
  "customer.phoneLabel": {
    en: "Phone:",
    fr: "Téléphone :",
  },

  "details.title": {
    en: "Order Details",
    fr: "Détails de la commande",
  },
  "details.typeLabel": {
    en: "Type:",
    fr: "Type :",
  },
  "details.paymentLabel": {
    en: "Payment:",
    fr: "Paiement :",
  },
  "details.paymentStatusLabel": {
    en: "Payment Status:",
    fr: "Statut du paiement :",
  },

  "delivery.title": {
    en: "Delivery Address",
    fr: "Adresse de livraison",
  },

  "special.title": {
    en: "Special Instructions",
    fr: "Instructions particulières",
  },

  "timeline.title": {
    en: "Order Status Timeline",
    fr: "Historique du statut de la commande",
  },

  "items.title": {
    en: "Order Items",
    fr: "Articles de la commande",
  },
  "items.each": {
    en: "each",
    fr: "par article",
  },
  "items.quantityLabel": {
    en: "Quantity:",
    fr: "Quantité :",
  },
  "items.sauceLabel": {
    en: "Sauce:",
    fr: "Sauce :",
  },
  "items.flavorLabel": {
    en: "Flavor:",
    fr: "Saveur :",
  },
  "items.mixLabel": {
    en: "Mix:",
    fr: "Mélange :",
  },

  "summary.orderLabel": {
    en: "Order",
    fr: "Commande",
  },
  "summary.placedOn": {
    en: "Placed on",
    fr: "Passée le",
  },

  "totals.subtotalLabel": {
    en: "Subtotal:",
    fr: "Sous-total :",
  },
  "totals.deliveryFeeLabel": {
    en: "Delivery Fee:",
    fr: "Frais de livraison :",
  },
  "totals.discountLabel": {
    en: "Discount:",
    fr: "Remise :",
  },
  "totals.totalLabel": {
    en: "Total:",
    fr: "Total :",
  },

  "actions.backToMenu": {
    en: "Back to Menu",
    fr: "Retour au menu",
  },
  "actions.contactUs": {
    en: "Contact Us",
    fr: "Nous contacter",
  },

  "autoRefresh.notice": {
    en: "This page automatically updates every 30 seconds to show the latest order status.",
    fr: "Cette page se met automatiquement à jour toutes les 30 secondes pour afficher le dernier statut de votre commande.",
  },
} as const;

const statusLabels: Record<string, { en: string; fr: string }> = {
  pending: {
    en: "Order Received",
    fr: "Commande reçue",
  },
  confirmed: {
    en: "Order Confirmed",
    fr: "Commande confirmée",
  },
  preparing: {
    en: "Preparing",
    fr: "Préparation en cours",
  },
  out_for_delivery: {
    en: "Out for Delivery",
    fr: "En cours de livraison",
  },
  delivered: {
    en: "Delivered",
    fr: "Livrée",
  },
  cancelled: {
    en: "Cancelled",
    fr: "Annulée",
  },
};

const statusDescriptions: Record<string, { en: string; fr: string }> = {
  pending: {
    en: "Your order has been received and is being processed",
    fr: "Votre commande a été reçue et est en cours de traitement",
  },
  confirmed: {
    en: "Your order has been confirmed by our team",
    fr: "Votre commande a été confirmée par notre équipe",
  },
  preparing: {
    en: "Your order is being prepared in our kitchen",
    fr: "Votre commande est en cours de préparation dans notre cuisine",
  },
  out_for_delivery: {
    en: "Your order is on its way to you",
    fr: "Votre commande est en route vers vous",
  },
  delivered: {
    en: "Your order has been delivered successfully",
    fr: "Votre commande a été livrée avec succès",
  },
  cancelled: {
    en: "Your order has been cancelled",
    fr: "Votre commande a été annulée",
  },
};

export type OrderTrackingTextKey = keyof typeof texts;

export function OrderTrackingText({ id }: { id: OrderTrackingTextKey }) {
  const { language } = useLanguage();
  const entry = texts[id];
  return <>{language === "fr" ? entry.fr : entry.en}</>;
}

export function OrderStatusLabel({ status, fallback }: { status: string; fallback?: string }) {
  const { language } = useLanguage();
  const key = statusLabels[status];
  if (!key) {
    return <>{fallback ?? status}</>;
  }
  return <>{language === "fr" ? key.fr : key.en}</>;
}

export function OrderStatusDescription({ status }: { status: string }) {
  const { language } = useLanguage();
  const key = statusDescriptions[status];
  if (!key) {
    return null;
  }
  return <>{language === "fr" ? key.fr : key.en}</>;
}

export function OrderTypeText({ orderType }: { orderType: string }) {
  const { language } = useLanguage();
  const type = orderType.toLowerCase();
  if (type === "delivery") {
    return <>{language === "fr" ? "Livraison" : "Delivery"}</>;
  }
  if (type === "pickup") {
    return <>{language === "fr" ? "À emporter" : "Pickup"}</>;
  }
  return <>{orderType.charAt(0).toUpperCase() + orderType.slice(1)}</>;
}

export function OrderPaymentMethodText({ method }: { method: string }) {
  const { language } = useLanguage();
  const m = method.toLowerCase();
  if (m === "stripe") {
    return <>{language === "fr" ? "Paiement en ligne (Stripe)" : "Online Payment (Stripe)"}</>;
  }
  if (m === "cod") {
    return <>{language === "fr" ? "Paiement à la livraison" : "Cash on Delivery"}</>;
  }
  return <>{method.toUpperCase()}</>;
}

export function OrderPaymentStatusText({ status }: { status: string }) {
  const { language } = useLanguage();
  const normalized = status.toLowerCase();
  if (normalized === "paid") {
    return <>{language === "fr" ? "Payé" : "Paid"}</>;
  }
  if (normalized === "pending") {
    return <>{language === "fr" ? "En attente" : "Pending"}</>;
  }
  if (normalized === "failed") {
    return <>{language === "fr" ? "Échoué" : "Failed"}</>;
  }
  return <>{status}</>;
}
