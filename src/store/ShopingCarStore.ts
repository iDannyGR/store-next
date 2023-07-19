import { create } from 'zustand';
import { persist } from 'zustand/middleware'
import { GetData, Rating } from '@/models/GetData';

interface State {
  item: { [id: number]: GetData }; //find products by id
  isOpen: boolean;
}


interface Actions {
  setArticle: (article:GetData) => void;
  deleteArticle: (id:GetData['id']) => void;
  setisOpen: (value:boolean) => void;
  setSumProduct: (id:GetData['id']) => void;
  setSustProduct: (id:GetData['id']) => void;
}


export const ShopingCarStore = create(
  persist<State & Actions>(
    (set) => ({
      item: {},
      isOpen: false,
      setArticle: (article) =>
        set((state) => {
          const existingItem = state.item[article.id];
          const newItem = {
            ...article,
            quantity: existingItem ? existingItem.quantity + 1 : 1,
            total: existingItem ? (existingItem.quantity + 1) * article.price : article.price
          };
          return { item: { ...state.item, [article.id]: newItem } };
        }),
      setisOpen: (value) => set((state) => ({ isOpen: value })),
      deleteArticle: (id) =>
        set((state) => {
          const { [id]: removedItem, ...restItems } = state.item;
          return { item: restItems };
        }),
      setSumProduct: (id) =>
        set((state) => {
          const itemToUpdate = state.item[id];
          if (itemToUpdate) {
            const updatedItem = {
              ...itemToUpdate,
              quantity: itemToUpdate.quantity + 1,
              total: itemToUpdate.total + itemToUpdate.price
            };
            return { item: { ...state.item, [id]: updatedItem } };
          }
          return state;
        }),
      setSustProduct: (id) =>
        set((state) => {
          const itemToUpdate = state.item[id];
          if (itemToUpdate && itemToUpdate.quantity > 0) {
            const updatedItem = {
              ...itemToUpdate,
              quantity: itemToUpdate.quantity - 1,
              total: itemToUpdate.total - itemToUpdate.price
            };
            return { item: { ...state.item, [id]: updatedItem } };
          }
          return state;
        })
    }),
    { name: 'MyCart' }
  )
);
    
