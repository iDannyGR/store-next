import { GetData } from '@/models/GetData';


export interface MyOrders {
  date: string;
  items: { [id: number]: GetData };
  totalProducts: number;
  totalPrice: number;
}