'use client';
import React from 'react';
import { useHasHydrated } from '@/hooks/useHasHydrated';
import { ShopingCarStore } from '@/store/ShopingCarStore';
import ProductDetail from './ProductDetail';
import cx from 'classnames';
import TotalPriceButton from './TotalPriceButton';
import AddRemoveButton from '../buttons/AddRemoveButton';
import DeleteProduct from '../buttons/DeleteProduct';
import CloseModal from '../buttons/CloseModal';



const ProductsCart = (): React.ReactElement => {

  const hydration = useHasHydrated();
  const { item, setisOpen, isOpen } = ShopingCarStore();
  const SelectedArticle =  Object.values(item);
  const dynamicHeight = SelectedArticle.length * 80;
  const totalPrice = parseFloat(
    SelectedArticle.reduce((total, item) => total + item.total, 0).toFixed(2)
  );

  return (
    <aside
      className={cx(
        `fixed right-14 z-20 mt-3 w-[450px] flex flex-col items-center rounded-lg border border-slate-300 bg-white shadow-xl transition-all ease-in-out duration-500`,
        {
          'opacity-0': isOpen == false,
          [`h-[${dynamicHeight}px]`]: isOpen == true
        }
      )}
    >
      <p className="mt-4 text-center text-lg font-bold">My Order</p>
      <CloseModal onClick={setisOpen} />
      <div className='h-[750px] w-full overflow-y-auto'>
        {hydration &&
          SelectedArticle.map((article) => (
            <div className="flex w-full items-center justify-center" key={article.id}>
              <ProductDetail product={article}/>
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
