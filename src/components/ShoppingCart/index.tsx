'use client';
import React from 'react';
import { useHasHydrated } from '@/hooks/useHasHydrated';
import { ShopingCarStore } from '@/store/ShopingCarStore';
import ProductDetail from './ProductDetail';
import cx from 'classnames';
import { XMarkIcon } from '@heroicons/react/24/outline';
import TotalPriceButton from './TotalPriceButton';

const ProductsCart = (): React.ReactElement => {

  const hydration = useHasHydrated();
  const { item, setisOpen, isOpen } = ShopingCarStore();
  const totalPrice = parseFloat(
    Object.values(item).reduce((total, item) => total + item.price, 0).toFixed(2)
  );

  return (
    <aside
      className={cx(
        'fixed right-8 z-20 mt-3 flex w-[450px] flex-col items-center overflow-y-auto rounded-lg border bg-white',
        {
          'hidden translate-x-0 opacity-0 ': isOpen == false,
          'visible translate-x-5 opacity-100': isOpen == true
        }
      )}
    >
      <p className="mt-4 text-center text-lg font-bold">My Order</p>
      <XMarkIcon
        className="absolute right-1 top-1 h-6 w-6 cursor-pointer text-red-500"
        onClick={() => setisOpen(false)}
      />
      {hydration && item.map((article, index) => <ProductDetail product={article} key={index} />)}
      {hydration && <TotalPriceButton total={totalPrice} />}
    </aside>
  );
};

export default ProductsCart;
