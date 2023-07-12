'use client'
import React from 'react';
import { useHasHydrated } from '@/hooks/useHasHydrated';
import { ShopingCarStore } from '@/store/ShopingCarStore';
import ProductDetail from './ProductDetail';
import cx from 'classnames'
import { XMarkIcon } from '@heroicons/react/24/outline';


const ProductsCart = (): React.ReactElement => {
    const hydration = useHasHydrated()
    const { item, setisOpen, isOpen } = ShopingCarStore();    
  return (
    <aside
      className={cx(
        'fixed right-0 z-20 flex w-96 flex-col rounded-lg border bg-white transition-all duration-150 ease-in-out',
        { hidden: isOpen == false }
      )}
    >
      <p className="text-center text-lg font-bold">My Cart</p>
      <XMarkIcon
        className="absolute right-1 top-1 h-6 w-6 cursor-pointer text-red-500"
        onClick={() => setisOpen(false)}
      />
      {hydration && item.map((article, index) => <ProductDetail product={article} key={index} />)}
    </aside>
  );
};

export default ProductsCart;
