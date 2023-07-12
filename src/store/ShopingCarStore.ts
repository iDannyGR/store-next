import { create } from 'zustand';
import { persist } from 'zustand/middleware'
import { GetData } from '@/models/GetData';

interface State{
    item: GetData[],
    isOpen: boolean
}

interface Actions {
  setArticle: (article:GetData) => void;
  deleteArticle: (id:GetData['id']) => void;
  setisOpen: (value:boolean) => void;
}

export const ShopingCarStore = create(
  persist<State & Actions>(
    (set) => ({
      item: [],
      isOpen: false,
      setArticle: (article) => set(state =>({item: [...state.item, article ] })),
      setisOpen: (value) => set(state =>({isOpen: value })),
      deleteArticle: (id) => set( state =>({ item: state.item.filter(article => article.id !== id)}))
    }),
    { name: 'MyCart' }
  )
);
    