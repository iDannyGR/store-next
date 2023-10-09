'use client'
import { SearchStore } from '@/store/SearchStore';
import { ChangeEvent } from 'react';
import {MagnifyingGlassPlusIcon } from '@heroicons/react/20/solid';

const SearchBar = (): React.ReactElement => {
    const { setSearch, search } = SearchStore();
  
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      console.log(e.target.value)
    };

  return (
    <div className='relative flex justify-center items-center'>
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={handleChange}
        className="w-96 h-12 border-b border-black "
      />
        <MagnifyingGlassPlusIcon className='absolute w-6 h-6 left-0 top-0' />
    </div>
  );
}

export default SearchBar