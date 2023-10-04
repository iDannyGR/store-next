import { SearchStore } from '@/store/SearchStore';

export const useSearch = () => {
    const { setSearch, search } = SearchStore();

    


    return {setSearch, search}

};
