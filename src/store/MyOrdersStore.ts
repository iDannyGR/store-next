import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { MyOrders  } from '@/models/MyOrders';
import { GetData } from '@/models/GetData';

interface Actions {
  setOrder: (item: { [id: number]: GetData }) => void;
}
interface Orders {
    Orders :MyOrders[]
}
export const ShopingCarStore = create(
  persist<Orders & Actions>(
    (set) => ({
      Orders:[],
      setOrder: (item) => set((state) => ({ ...state, items: { item } }))
    }),
    { name: 'MyOrders' }
  )
);
