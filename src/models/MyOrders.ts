import { GetData } from '@/models/GetData';


export interface MyOrders {
  id:string;
  date: string;
  items: { [id: number]: GetData };
  totalProducts: number;
  totalPrice: number;
}