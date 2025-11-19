"use client";

import { useLanguage } from "../LanguageProvider";

const texts = {
  "loading.title": {
    en: "Processing Your Order",
    fr: "Traitement de votre commande",
  },
  "loading.subtitle1": {
    en: "We're retrieving your order details...",
    fr: "Nous récupérons les détails de votre commande...",
  },
  "loading.subtitle2": {
    en: "If it's taking too long, please refresh the page using the button below.",
    fr: "Si cela prend trop de temps, veuillez actualiser la page en utilisant le bouton ci-dessous.",
  },

  "success.mainTitle": {
    en: "Order Confirmed!",
    fr: "Commande confirmée !",
  },
  "success.description": {
    en: "Your order has been confirmed and is being prepared.",
    fr: "Votre commande a été confirmée et est en préparation.",
  },

  "orderInfo.title": {
    en: "Order Details",
    fr: "Détails de la commande",
  },
  "orderInfo.numberLabel": {
    en: "Order Number:",
    fr: "Numéro de commande :",
  },
  "orderInfo.dateLabel": {
    en: "Order Date:",
    fr: "Date de commande :",
  },
  "orderInfo.timeLabel": {
    en: "Order Time:",
    fr: "Heure de commande :",
  },
  "orderInfo.typeLabel": {
    en: "Order Type:",
    fr: "Type de commande :",
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

  "delivery.title": {
    en: "Delivery Address",
    fr: "Adresse de livraison",
  },
  "delivery.specialInstructionsLabel": {
    en: "Special Instructions:",
    fr: "Instructions particulières :",
  },

  "payment.title": {
    en: "Payment Information",
    fr: "Informations de paiement",
  },
  "payment.methodLabel": {
    en: "Payment Method:",
    fr: "Mode de paiement :",
  },
  "payment.statusLabel": {
    en: "Payment Status:",
    fr: "Statut du paiement :",
  },
  "payment.codNotice": {
    en: "Please prepare cash payment for when your order arrives.",
    fr: "Veuillez préparer le paiement en espèces pour la livraison de votre commande.",
  },

  "items.title": {
    en: "Order Items",
    fr: "Articles de la commande",
  },
  "items.each": {
    en: "each",
    fr: "par article",
  },

  "summary.title": {
    en: "Order Summary",
    fr: "Récapitulatif de la commande",
  },
  "summary.subtotalLabel": {
    en: "Subtotal:",
    fr: "Sous-total :",
  },
  "summary.deliveryFeeLabel": {
    en: "Delivery Fee:",
    fr: "Frais de livraison :",
  },
  "summary.discountLabel": {
    en: "Discount:",
    fr: "Remise :",
  },
  "summary.totalLabel": {
    en: "Total:",
    fr: "Total :",
  },

  "next.title": {
    en: "What's Next?",
    fr: "Et ensuite ?",
  },
  "next.delivery.step1": {
    en: "Your order is being prepared by our kitchen team",
    fr: "Votre commande est en cours de préparation par notre équipe en cuisine",
  },
  "next.delivery.step2": {
    en: "We'll contact you when your order is out for delivery",
    fr: "Nous vous contacterons lorsque votre commande sera en cours de livraison",
  },
  "next.delivery.step3": {
    en: "Please ensure someone is available to receive the order",
    fr: "Veuillez vous assurer que quelqu’un sera disponible pour réceptionner la commande",
  },
  "next.pickup.step1": {
    en: "Your order is being prepared by our kitchen team",
    fr: "Votre commande est en cours de préparation par notre équipe en cuisine",
  },
  "next.pickup.step2": {
    en: "We'll contact you when it's ready for pickup",
    fr: "Nous vous contacterons lorsque votre commande sera prête à être retirée",
  },
  "next.pickup.step3": {
    en: "Please arrive at our location to collect your order",
    fr: "Veuillez vous rendre sur place pour récupérer votre commande",
  },
  "next.pickup.restaurantName": {
    en: "Nirvana Restaurant",
    fr: "Restaurant Nirvana",
  },
  "next.pickup.phoneLabel": {
    en: "Phone:",
    fr: "Téléphone :",
  },

  "actions.goHome": {
    en: "Go to Home",
    fr: "Retour à l’accueil",
  },
  "actions.viewMenu": {
    en: "View Menu",
    fr: "Voir le menu",
  },
  "actions.contactUs": {
    en: "Contact Us",
    fr: "Nous contacter",
  },
  "actions.contactSupport": {
    en: "Contact Support",
    fr: "Contacter le support",
  },

  "error.genericTitle": {
    en: "Something went wrong",
    fr: "Un problème est survenu",
  },
  "error.genericDescription": {
    en: "We encountered an error retrieving your order details.",
    fr: "Nous avons rencontré une erreur lors de la récupération des détails de votre commande.",
  },

  "autoUpdate.notice": {
    en: "This page automatically updates every 30 seconds to show the latest order status.",
    fr: "Cette page se met automatiquement à jour toutes les 30 secondes pour afficher le dernier statut de votre commande.",
  },
} as const;

export type ReturnTextKey = keyof typeof texts;

export function ReturnText({ id }: { id: ReturnTextKey }) {
  const { language } = useLanguage();
  const entry = texts[id];
  return <>{language === "fr" ? entry.fr : entry.en}</>;
}

export function ReturnPaymentHeading({ paymentMethod }: { paymentMethod: string }) {
  const { language } = useLanguage();
  if (paymentMethod === "stripe") {
    return <>{language === "fr" ? "Paiement réussi !" : "Payment Successful!"}</>;
  }
  return <>{language === "fr" ? "Commande confirmée !" : "Order Confirmed!"}</>;
}

export function ReturnOrderTypeLabel({ orderType }: { orderType: string }) {
  const { language } = useLanguage();
  if (orderType === "delivery") {
    return <>{language === "fr" ? "Livraison" : "Delivery"}</>;
  }
  return <>{language === "fr" ? "À emporter" : "Pickup"}</>;
}

export function ReturnEstimatedTitle({ orderType }: { orderType: string }) {
  const { language } = useLanguage();
  if (orderType === "delivery") {
    return <>{language === "fr" ? "Livraison estimée" : "Estimated Delivery"}</>;
  }
  return <>{language === "fr" ? "Prête à être retirée" : "Ready for Pickup"}</>;
}

export function ReturnEstimatedMessage({ orderType }: { orderType: string }) {
  const { language } = useLanguage();
  if (orderType === "delivery") {
    return <>{language === "fr" ? "Votre commande sera livrée dans un délai de 30 à 45 minutes" : "Your order will be delivered within 30-45 minutes"}</>;
  }
  return <>{language === "fr" ? "Votre commande sera prête à être retirée dans 15 à 20 minutes" : "Your order will be ready for pickup in 15-20 minutes"}</>;
}

export function ReturnPaymentStatusText({ status }: { status: string }) {
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
  // Fallback to raw status if it's something unexpected
  return <>{status}</>;
}
