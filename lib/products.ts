export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Chicken Biryani',
    price: 18.99,
    category: 'Main Courses',
  },
  {
    id: '2',
    name: 'Vegetable Curry',
    price: 14.50,
    category: 'Main Courses',
  },
  {
    id: '3',
    name: 'Tandoori Chicken',
    price: 22.00,
    category: 'Starters',
  },
  {
    id: '4',
    name: 'Paneer Tikka',
    price: 16.75,
    category: 'Starters',
  },
  {
    id: '5',
    name: 'Lamb Rogan Josh',
    price: 24.99,
    category: 'Main Courses',
  },
  {
    id: '6',
    name: 'Dal Makhani',
    price: 12.00,
    category: 'Main Courses',
  },
  {
    id: '7',
    name: 'Red Wine - Cabernet Sauvignon',
    price: 35.00,
    category: 'Wines',
  },
  {
    id: '8',
    name: 'White Wine - Chardonnay',
    price: 30.00,
    category: 'Wines',
  },
  {
    id: '9',
    name: 'Rose Wine - Provence',
    price: 28.00,
    category: 'Wines',
  },
  {
    id: '10',
    name: 'Champagne - Brut',
    price: 75.00,
    category: 'Wines',
  },
];
