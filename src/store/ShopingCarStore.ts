import { create } from 'zustand';
import { persist } from 'zustand/middleware'
import { GetData, Rating } from '@/models/GetData';

interface State{
    item: GetData[],
    isOpen: boolean
}

interface Actions {
  setArticle: (article:GetData) => void;
  deleteArticle: (id:GetData['id']) => void;
  setisOpen: (value:boolean) => void;
}

type State2 = {
  item:GetData
}
interface Actions2{
  setItem: (article:GetData) => void 
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
    
export const ArticleDetail = create<State2 & Actions2>((set) => ({
  item: {
    id: 0,
    category: '',
    description: '',
    image: '',
    price: 0,
    rating: { count: 0, rate: 0 },
    title: ''
  },
  setItem: (article) => set((state) => ({ item: article }))
}));