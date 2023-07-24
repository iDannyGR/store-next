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
    Object.values(item).reduce((total, item) => total + item.total, 0).toFixed(2)
  );
  return (
    <aside
      className={cx(
        'fixed flex flex-col right-14 z-20 mt-3 w-[450px] h-[90vh] items-center rounded-lg bg-white border border-slate-300 shadow-xl',
        {
          'hidden  opacity-0 ': isOpen == false,
          'visible opacity-100': isOpen == true
        }
      )}
    >
      <p className="mt-4 text-center text-lg font-bold">My Order</p>
      <XMarkIcon
        className="absolute right-1 top-1 h-6 w-6 cursor-pointer text-red-500"
        onClick={() => setisOpen(false)}
      />
      <div className='w-full h-[78vh] overflow-y-auto flex flex-col'>
        {hydration &&
          Object.values(item).map((article, index) => <ProductDetail product={article} key={index} />)}
      </div>
        {hydration && <TotalPriceButton total={totalPrice} />}
    </aside>
  );
};

export default ProductsCart;
