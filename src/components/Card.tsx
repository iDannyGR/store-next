'use client';
import React from 'react';
import Image from 'next/image';
import { ShopingCarStore } from '@/store/ShopingCarStore';
import { useStoreProducts } from '@/hooks/useStoreProducts';
import { ArticleDetail } from '@/store/ArticleDetailStore';
import { GetData } from '@/models/GetData';
import  PlusCircleIcon  from '@heroicons/react/20/solid/PlusCircleIcon';

type Props = {
  product: GetData
}

const card = ({product}: Props):React.ReactElement => {

      const {  setisOpen  } = ShopingCarStore();
      const { setItem, setisShow } = ArticleDetail();
      const { addProduct } = useStoreProducts()
      
    const handleClick = (item:GetData) => { 
          setisOpen(true);
          setisShow(true);
          setItem(item);
    }
    
      return (
        <div
          className="h-64 w-56 cursor-pointer rounded-xl border border-gray-300 bg-white shadow-md"
          key={product.id}
        >
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
              onClick={() => handleClick(product)}
              priority
            />
            <button onClick={() => addProduct(product)}>
              <PlusCircleIcon className="absolute right-0 top-0 h-6 w-6 text-red-500" />
            </button>
          </figure>
          <p className="m-2 flex items-center justify-between">
            <span className="truncate text-sm font-light">{product.title}</span>
            <span className="text-lg font-bold">${product.price}</span>
          </p>
        </div>
      );
}

export default card

