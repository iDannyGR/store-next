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
        'fixed right-8 z-20 mt-3 flex w-96 p-3 flex-col rounded-lg border bg-white transition ease-in-out duration-150',
        {
          'hidden translate-x-0 opacity-0 ': isOpen == false,
          'visible translate-x-5 opacity-100': isOpen == true
        }
      )}
    >
      <p className="text-center text-lg font-bold mt-4">Products Details</p>
      <XMarkIcon
        className="absolute right-1 top-1 h-6 w-6 cursor-pointer text-red-500"
        onClick={() => setisOpen(false)}
      />
      {hydration && item.map((article, index) => <ProductDetail product={article} key={index} />)}
    </aside>
  );
};

export default ProductsCart;
