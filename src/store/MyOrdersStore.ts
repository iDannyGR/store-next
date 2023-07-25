import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { MyOrders  } from '@/models/MyOrders';

interface Actions {
  setOrder: (item:MyOrders) => void;
}
interface Orders {
    Orders :{[id:MyOrders['date']]:MyOrders}
}
export const MyOrdersStore = create(
  persist<Orders & Actions>(
    (set) => ({
      Orders:{},
      setOrder: (item) => set((state) => ({...state, Orders:{[item.date]: item} })),
    }),
    { name: 'MyOrders' }
  )
);
