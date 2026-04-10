// Models for file operations examples
export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

export interface Order {
  id: number;
  userId: number;
  products: Product[];
  total: number;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
}