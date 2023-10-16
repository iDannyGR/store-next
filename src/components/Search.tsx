'use client'
import React from 'react';
import {MagnifyingGlassPlusIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation';

const Search = (): React.ReactElement => {
  const [search, setSearch] = React.useState<string>('');
  const router = useRouter();

  React.useEffect(() => {
      search === '' ? router.push('/') : router.push(`?search=${search}`)
  }, [search, router])
  
  return (
    <div className='relative flex justify-center items-center'>
      <input
        type="text"
        placeholder='Search a Products'
        name="search"
        value={search}
        id="search"
        onChange={( e )=> setSearch(e.target.value)}
        className="w-96 h-12 border-b border-black focus:outline-0 pl-8 text-center"
      />
        <MagnifyingGlassPlusIcon className='absolute w-6 h-6 left-0 top-5 text-gray-400' />
    </div>
  );
}

export default Search;