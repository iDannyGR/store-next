'use client'
import React from 'react';
import ProductDetail from './ProductDetail';
import { ShopingCarStore } from '@/store/ShopingCarStore';

const ProductsCart = (): React.ReactElement => {
    
  const { item } = ShopingCarStore();
  console.log(item)
  return (
    <aside className="fixed right-0 z-20 flex w-96 flex-col rounded-lg border bg-white">
      <p className="text-lg font-bold text-center">My Cart</p>
      
    </aside>
  );
};

export default ProductsCart;
