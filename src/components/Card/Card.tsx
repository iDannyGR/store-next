import React from 'react';
import Image from 'next/image';
import headphones from '@/components/Card/headphones.jpg'

type Props = {}

const card = (props: Props) => {
  return (
    <div className="h-72 w-56 border border-gray-50 cursor-pointer shadow-2xl rounded-xl">
      <figure className="relative mb-2 h-4/5 w-full">
        <span className="absolute bottom-0 left-0 bg-amber-400/60 p-1 rounded-lg font-bold">Electronics</span>
        <Image 
          src={headphones} 
          alt={'a headphones'}
          className='object-cover '
          />
      </figure>
        <p className="flex items-center justify-between m-2">
          <span className="text-sm font-light">headphone</span>
          <span className="text-lg font-bold">$300</span>
        </p>
    </div>
  );
}

export default card