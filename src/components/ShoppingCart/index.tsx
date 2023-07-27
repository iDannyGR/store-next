'use client';
import React from 'react';
import { useHasHydrated } from '@/hooks/useHasHydrated';
import { ShopingCarStore } from '@/store/ShopingCarStore';
import ProductDetail from './ProductDetail';
import cx from 'classnames';
import { XMarkIcon } from '@heroicons/react/24/outline';
import TotalPriceButton from './TotalPriceButton';
import AddRemoveButton from '../buttons/AddRemoveButton';
import DeleteProduct from '../buttons/DeleteProduct';



const ProductsCart = (): React.ReactElement => {

  const hydration = useHasHydrated();
  const { item, setisOpen, isOpen } = ShopingCarStore();
  const totalPrice = parseFloat(
    Object.values(item).reduce((total, item) => total + item.total, 0).toFixed(2)
  );
  return (
    <aside
      className={cx(
        'fixed flex flex-col items-center right-14 z-20 mt-3 h-[90vh] w-[450px] rounded-lg border border-slate-300 bg-white shadow-xl',
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
      <div className='overflow-y-auto h-[75vh] w-full'>
        {hydration &&
          Object.values(item).map((article, index) => (
            <div className="flex items-center justify-center w-full">
              <ProductDetail product={article} key={index} />
              <AddRemoveButton id={article.id} />
              <DeleteProduct id={article.id} />
            </div>
          ))}
      </div>
      {hydration && <TotalPriceButton total={totalPrice} />}
    </aside>
  );
};

export default ProductsCart;
