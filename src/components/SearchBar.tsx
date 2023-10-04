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
    <div className='relative flex justify-center'>
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={handleChange}
        className="mt-3 w-96 rounded-lg p-4"
      />
        <MagnifyingGlassPlusIcon className='absolute w-6 h-6 left-0 top-8' />
    </div>
  );
}

export default SearchBar