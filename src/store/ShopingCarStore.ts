import { create } from 'zustand';
import { persist } from 'zustand/middleware'

interface State{
    item: number
}

interface Actions {
  setArticle: () => void;
}

export const ShopingCarStore = create(
  persist<State & Actions>(
    (set) => ({
      item: 0,
      setArticle: () => set( state =>({ item: state.item + 1 }))
    }),
    { name: 'MyCart' }
  )
);
    