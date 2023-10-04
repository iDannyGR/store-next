import { create } from 'zustand';

type State = {
  search: string;
  setSearch: (value: string) => void;
};

export const SearchStore = create<State>((set) => ({
  search: '',
  setSearch: (value) => set((state) => ({ search: value }))
}));
