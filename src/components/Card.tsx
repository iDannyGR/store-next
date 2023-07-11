'use client';
import React from 'react';
import Image from 'next/image';
import { GetData } from '@/models/GetData';
import  PlusCircleIcon  from '@heroicons/react/20/solid/PlusCircleIcon';
import { ShopingCarStore } from '@/store/ShopingCarStore';

type Props = {
  product: GetData
}

const card = ({product}: Props):React.ReactElement => {
  
  const  setArticle  = ShopingCarStore( (state) => state.setArticle)

   return (
    <div className="h-64 w-56 cursor-pointer rounded-xl border border-gray-300 bg-white shadow-md shadow-orange-300" key={product.id}>
      <figure className="relative mb-2 h-4/5 w-full">
        <span className="absolute bottom-4 left-0 rounded-lg bg-amber-400/60 p-1 font-bold">
          {product.category}
        </span>
        <Image
          src={product.image}
          alt={'a headphones'}
          width={350}
          height={350}
          className="m-0 h-full w-full rounded-xl object-cover"
        />
        <button onClick={() => setArticle( product )}>
          <PlusCircleIcon className="absolute right-0 top-0 h-6 w-6 text-red-500" />
        </button>
      </figure>
      <p className="m-2 flex items-center justify-between">
        <span className="text-sm font-light truncate">{product.title}</span>
        <span className="text-lg font-bold">${product.price}</span>
      </p>
    </div>
  );
}

export default card

