'use client';
import React from 'react';
import { useHasHydrated } from '@/hooks/useHasHydrated';
import { ShopingCarStore } from '@/store/ShopingCarStore';
import ProductDetail from './ProductDetail';
import cx from 'classnames';
import { XMarkIcon } from '@heroicons/react/24/outline';
import TotalPriceButton from './TotalPriceButton';
import AddRemoveButton from '../buttons/AddRemoveButton';
import { TrashIcon } from '@heroicons/react/24/outline';



const ProductsCart = (): React.ReactElement => {

  const hydration = useHasHydrated();
  const { item, setisOpen, isOpen, deleteArticle } = ShopingCarStore();
  const totalPrice = parseFloat(
    Object.values(item).reduce((total, item) => total + item.total, 0).toFixed(2)
  );
  return (
    <aside
      className={cx(
        'fixed right-14 z-20 mt-3 flex h-[90vh] w-[450px] flex-col items-center rounded-lg border border-slate-300 bg-white shadow-xl',
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
            <div className="flex items-center w-full">
              <ProductDetail product={article} key={index} />
              <AddRemoveButton id={article.id} />
              <TrashIcon
                className="h-6 w-6 ml-2 cursor-pointer text-rose-800 transition duration-200 ease-in hover:scale-150"
                onClick={() => deleteArticle(article.id)}/>
            </div>
          ))}
      </div>
      {hydration && <TotalPriceButton total={totalPrice} />}
    </aside>
  );
};

export default ProductsCart;
