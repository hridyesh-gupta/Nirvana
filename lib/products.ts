export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
}

export const products: Product[] = [
  // Vegetarian Starters - Vegetarian
  { id: 'onions-bhaji', name: 'Onions Bhaji', price: 15.00, category: 'Vegetarian Starters' },
  { id: 'matar-tiki', name: 'Matar Tiki', price: 15.00, category: 'Vegetarian Starters' },
  { id: 'traditional-samosa', name: 'Traditional Samosa', price: 15.00, category: 'Vegetarian Starters' },
  { id: 'raita', name: 'Raita', price: 15.00, category: 'Vegetarian Starters' },
  { id: 'raita-aubergines', name: 'Raita Aubergines', price: 17.00, category: 'Vegetarian Starters' },
  { id: 'paneer-tikka', name: 'Paneer Tikka', price: 19.00, category: 'Vegetarian Starters' },
  // Vegetarian Starters - Nirvana Vegetarian Platter variants
  { id: 'nirvana-veg-platter-for-one-guest', name: 'Nirvana Vegetarian Platter (For one guest)', price: 25.00, category: 'Vegetarian Starters' },
  { id: 'nirvana-veg-platter-for-two-guests', name: 'Nirvana Vegetarian Platter (For two guests)', price: 35.00, category: 'Vegetarian Starters' },

  // Tandoori Grills with variants (Starter/Main)
  { id: 'chicken-tandoori-starter', name: 'Chicken Tandoori (Starter)', price: 15.00, category: 'Tandoori Grills' },
  { id: 'chicken-tandoori-main', name: 'Chicken Tandoori (Main)', price: 25.00, category: 'Tandoori Grills' },
  { id: 'black-pepper-chicken-tikka-starter', name: 'Black Pepper Chicken Tikka (Starter)', price: 25.00, category: 'Tandoori Grills' },
  { id: 'black-pepper-chicken-tikka-main', name: 'Black Pepper Chicken Tikka (Main)', price: 29.00, category: 'Tandoori Grills' },
  { id: 'gilafi-seekh-kebab-starter', name: 'Gilafi Seekh Kebab (Starter)', price: 25.00, category: 'Tandoori Grills' },
  { id: 'gilafi-seekh-kebab-main', name: 'Gilafi Seekh Kebab (Main)', price: 33.00, category: 'Tandoori Grills' },
  { id: 'salmon-tikka-starter', name: 'Salmon Tikka (Starter)', price: 25.00, category: 'Tandoori Grills' },
  { id: 'salmon-tikka-main', name: 'Salmon Tikka (Main)', price: 35.00, category: 'Tandoori Grills' },
  { id: 'prawns-tandoori-starter', name: 'Prawns Tandoori (Starter)', price: 29.00, category: 'Tandoori Grills' },
  { id: 'prawns-tandoori-main', name: 'Prawns Tandoori (Main)', price: 39.00, category: 'Tandoori Grills' },

  // Salads & Grills of Choice (variants)
  { id: 'salads-prawns-tandoori-starter', name: 'Prawns Tandoori (Starter)', price: 29.00, category: 'Salads & Grills of Choice' },
  { id: 'salads-prawns-tandoori-main', name: 'Prawns Tandoori (Main)', price: 39.00, category: 'Salads & Grills of Choice' },
  { id: 'salads-the-salmon-tikka-starter', name: 'The Salmon Tikka (Starter)', price: 25.00, category: 'Salads & Grills of Choice' },
  { id: 'salads-the-salmon-tikka-main', name: 'The Salmon Tikka (Main)', price: 35.00, category: 'Salads & Grills of Choice' },
  { id: 'salads-chicken-tikka-black-pepper-starter', name: 'Chicken Tikka Black Pepper (Starter)', price: 22.00, category: 'Salads & Grills of Choice' },
  { id: 'salads-chicken-tikka-black-pepper-main', name: 'Chicken Tikka Black Pepper (Main)', price: 29.00, category: 'Salads & Grills of Choice' },
  { id: 'salads-paneer-tikka-starter', name: 'Paneer Tikka (Starter)', price: 19.00, category: 'Salads & Grills of Choice' },
  { id: 'salads-paneer-tikka-main', name: 'Paneer Tikka (Main)', price: 25.00, category: 'Salads & Grills of Choice' },
  { id: 'fresh-mixed-salad-starter', name: 'Fresh Mixed Salad (Starter)', price: 10.00, category: 'Salads & Grills of Choice' },
  { id: 'fresh-mixed-salad-main', name: 'Fresh Mixed Salad (Main)', price: 15.00, category: 'Salads & Grills of Choice' },
  { id: 'indian-mixed-salad-starter', name: 'Indian Mixed Salad (Starter)', price: 10.00, category: 'Salads & Grills of Choice' },
  { id: 'indian-mixed-salad-main', name: 'Indian Mixed Salad (Main)', price: 15.00, category: 'Salads & Grills of Choice' },

  // Main Courses - Classic Dishes
  { id: 'king-prawns-balti', name: 'King Prawns Balti', price: 39.00, category: 'Classic Dishes' },
  { id: 'kerala-prawns-masala', name: 'Kerala Prawns Masala', price: 39.00, category: 'Classic Dishes' },
  { id: 'butter-chicken', name: 'Butter Chicken', price: 33.00, category: 'Classic Dishes' },
  { id: 'chicken-tikka-masala', name: 'Chicken Tikka Masala', price: 33.00, category: 'Classic Dishes' },

  // Thalis
  { id: 'thali-nauratan', name: 'Nauratan (Vegetarian Thali)', price: 45.00, category: 'Thalis' },
  { id: 'thali-shikaarpuri', name: 'Shikaarpuri', price: 55.00, category: 'Thalis' },

  // Byrianis (keep spelling consistent with menu)
  { id: 'byriani-veg', name: 'Vegetarian Byriani', price: 29.00, category: 'Byrianis' },
  { id: 'byriani-chicken', name: 'Chicken Byriani', price: 35.00, category: 'Byrianis' },
  { id: 'byriani-beef', name: 'Beef Byriani', price: 37.00, category: 'Byrianis' },
  { id: 'byriani-lamb', name: 'Lamb Byriani', price: 39.00, category: 'Byrianis' },
  { id: 'byriani-king-prawns', name: 'Shelled King Prawns Byriani', price: 45.00, category: 'Byrianis' },

  // Vegetarian - Paneer Specialties
  { id: 'veg-matar-paneer', name: 'Matar Paneer', price: 25.00, category: 'Paneer Specialties' },
  { id: 'veg-palak-paneer', name: 'Palak Paneer', price: 25.00, category: 'Paneer Specialties' },
  { id: 'veg-paneer-makhani', name: 'Paneer Makhani', price: 22.00, category: 'Paneer Specialties' },
  { id: 'veg-paneer-tikka-masala', name: 'Paneer Tikka Masala', price: 22.00, category: 'Paneer Specialties' },

  // Vegan - Vegan Curries
  { id: 'vegan-baingan-bartha', name: 'Baignan Bartha', price: 24.00, category: 'Vegan Curries' },
  { id: 'vegan-bhindi-masala', name: 'Bhindi Masala', price: 24.00, category: 'Vegan Curries' },
  { id: 'vegan-daal-tarka', name: 'Daal Tarka', price: 22.00, category: 'Vegan Curries' },
  { id: 'vegan-chana-masala', name: 'Chana Masala', price: 22.00, category: 'Vegan Curries' },
  { id: 'vegan-palak-aloo', name: 'Palak Aloo', price: 24.00, category: 'Vegan Curries' },
  { id: 'vegan-aloo-gobi', name: 'Aloo Gobi', price: 24.00, category: 'Vegan Curries' },
  { id: 'vegan-dam-aloo', name: 'Dam Aloo', price: 22.00, category: 'Vegan Curries' },

  // Accompaniments - Rice
  { id: 'kashmiri-rice', name: 'Kashmiri', price: 10.00, category: 'Accompaniments - Rice' },
  { id: 'saffron-rice', name: 'Saffron', price: 8.00, category: 'Accompaniments - Rice' },
  { id: 'pullao-rice', name: 'Pulao', price: 6.00, category: 'Accompaniments - Rice' },
  { id: 'plain-rice', name: 'Plain', price: 4.00, category: 'Accompaniments - Rice' },

  // Accompaniments - Breads
  { id: 'plain-naan', name: 'Plain', price: 4.00, category: 'Accompaniments - Breads' },
  { id: 'chilli-naan', name: 'Chilli', price: 6.00, category: 'Accompaniments - Breads' },
  { id: 'garlic-naan', name: 'Garlic', price: 6.00, category: 'Accompaniments - Breads' },
  { id: 'cheese-naan', name: 'Cheese', price: 8.00, category: 'Accompaniments - Breads' },
  { id: 'cheese-chilli-naan', name: 'Cheese, Chilli', price: 9.00, category: 'Accompaniments - Breads' },
  { id: 'cheese-garlic-naan', name: 'Cheese, Garlic', price: 9.00, category: 'Accompaniments - Breads' },
  { id: 'roti-paratha', name: 'Roti Paratha', price: 6.00, category: 'Accompaniments - Breads' },

  // Desserts
  { id: 'dessert-kheer', name: 'Kheer', price: 8.00, category: 'Desserts' },
  { id: 'dessert-halwa', name: 'Halwa', price: 8.00, category: 'Desserts' },
  { id: 'dessert-gulab-jamun', name: 'Gulab Jamun', price: 10.00, category: 'Desserts' },
  { id: 'dessert-pista-kulfi', name: 'Pista Kulfi', price: 12.00, category: 'Desserts' },
  { id: 'dessert-gulab-jamun-flambe', name: 'Gulab Jamun Flambé', price: 14.00, category: 'Desserts' },
  { id: 'dessert-mango-ice-cream', name: 'Mango Ice Cream', price: 12.00, category: 'Desserts' },
  { id: 'dessert-mango-fresh', name: 'Mango Fresh', price: 12.00, category: 'Desserts' },
  { id: 'dessert-nirvana', name: 'Nirvana', price: 14.00, category: 'Desserts' },
  { id: 'dessert-orange-carpaccio', name: 'Orange Carpaccio', price: 9.00, category: 'Desserts' },
  { id: 'dessert-dame-blanche', name: 'Dame Blanche', price: 12.00, category: 'Desserts' },
  { id: 'dessert-sorbets-alcoholic', name: 'Sorbets and Alcoholic Ice Creams', price: 14.00, category: 'Desserts' },
  // Desserts - Individual Ice Cream Flavours (7)
  { id: 'dessert-ice-raspberry-strawberry', name: 'Ice Cream - Raspberry & Strawberry', price: 6.00, category: 'Desserts - Ice Cream Flavours' },
  { id: 'dessert-ice-passion-mango', name: 'Ice Cream - Passion fruit & Mango', price: 6.00, category: 'Desserts - Ice Cream Flavours' },
  { id: 'dessert-ice-lemon-lime', name: 'Ice Cream - Lemon & Lime', price: 6.00, category: 'Desserts - Ice Cream Flavours' },
  { id: 'dessert-ice-espresso-crunch', name: 'Ice Cream - Espresso Crunch', price: 6.00, category: 'Desserts - Ice Cream Flavours' },
  { id: 'dessert-ice-swiss-chocolate', name: 'Ice Cream - Swiss Chocolate', price: 6.00, category: 'Desserts - Ice Cream Flavours' },
  { id: 'dessert-ice-vanilla-dream', name: 'Ice Cream - Vanilla Dream', price: 6.00, category: 'Desserts - Ice Cream Flavours' },
  { id: 'dessert-ice-pear', name: 'Ice Cream - Pear', price: 6.00, category: 'Desserts - Ice Cream Flavours' },
  ];
