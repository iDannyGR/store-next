import { GetData } from '@/models/GetData';


export interface MyOrders {
  date: string;
  items: GetData [];
  totalProducts: number;
  totalPrice:number;
}