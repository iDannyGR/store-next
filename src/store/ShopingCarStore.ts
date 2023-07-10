import { create } from 'zustand';
import { persist } from 'zustand/middleware'
import { GetData } from '@/models/GetData';

interface State{
    item: GetData[]
}

interface Actions {
  setArticle: (article:GetData) => void;
  deleteArticle: (id:GetData['id']) => void;
}

export const ShopingCarStore = create(
  persist<State & Actions>(
    (set) => ({
      item: [],
      setArticle: (article) => set( state =>({ item:[...state.item, article ] })),
      deleteArticle: (id) => set( state =>({ item: state.item.filter(article => article.id !== id)}))
    }),
    { name: 'MyCart' }
  )
);
    