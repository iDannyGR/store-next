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
}


export const ShopingCarStore = create(
  persist<State & Actions>(
    (set) => ({
      item: {},
      isOpen: false,
      setArticle: (article) => set((state) => ({...state, item: {...state.item, [article.id]: article }})),
      setisOpen: (value) => set((state) => ({ isOpen: value })),
      deleteArticle: (id) =>
        set((state) => {
          const { [id]: removedItem, ...restItems } = state.item;
          return { item: restItems };
        })
    }),
    { name: 'MyCart' }
  )
);
    ;
