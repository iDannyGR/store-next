'use client'
import { SearchStore } from '@/store/SearchStore';
import { ChangeEvent } from 'react';
import {MagnifyingGlassPlusIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation';

const Search = (): React.ReactElement => {
    const { setSearch, search } = SearchStore();
    const router = useRouter();
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      router.push(`/search?${e.target.value}`)
    };

  return (
    <div className='relative flex justify-center items-center'>
      <input
        type="text"
        placeholder='Search a Products'
        name="search"
        id="search"
        value={search}
        onChange={handleChange}
        className="w-96 h-12 border-b border-black focus:outline-0 pl-8 text-center"
      />
        <MagnifyingGlassPlusIcon className='absolute w-6 h-6 left-0 top-5 text-gray-400' />
    </div>
  );
}

export default Search