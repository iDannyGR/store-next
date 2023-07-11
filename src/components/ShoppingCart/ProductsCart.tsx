'use client'
import React from 'react';
import { ShopingCarStore } from '@/store/ShopingCarStore';
import ProductDetail from './ProductDetail';
import { XMarkIcon } from '@heroicons/react/24/outline';


const ProductsCart = (): React.ReactElement => {
    const { item } = ShopingCarStore();    
  return (
    <aside className="fixed right-0 z-20 flex w-96 flex-col rounded-lg border bg-white">
      <p className="text-center text-lg font-bold">My Cart</p>
      <XMarkIcon className="absolute right-1 top-1 h-6 w-6 text-red-500" />
      {if(item )item.map((article, index) => (
        <ProductDetail product={article} key={index}/>
      ))}
    </aside>
  );
};

export default ProductsCart;
