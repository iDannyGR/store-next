import { create } from 'zustand';
import { GetData } from '@/models/GetData';

type State = {
  item: GetData;
  isShow: boolean;
};
interface Actions {
  setItem: (article: GetData) => void;
  setisShow: (value: boolean) => void;
}

export const ArticleDetail = create<State & Actions>((set) => ({
  item: {
    id: 0,
    category: '',
    description: '',
    image: '',
    price: 0,
    rating: { count: 0, rate: 0 },
    title: '',
    total: 0,
    quantity:0
  },
  isShow: false,
  setItem: (article) => set((state) => ({ item: article })),
  setisShow: (value) => set((state) => ({ isShow: value }))
}));