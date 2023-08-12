'use client';
import React from 'react';
import { useHasHydrated } from '@/hooks/useHasHydrated';
import ProductDetail from './ProductDetail';
import TotalPriceButton from './TotalPriceButton';
import AddRemoveButton from '../buttons/AddRemoveButton';
import DeleteProduct from '../buttons/DeleteProduct';
import CloseModal from '../buttons/CloseModal';



const ProductsCart = (): React.ReactElement => {

  const hydration = useHasHydrated();
  const SelectedArticle =  Object.values(item);
  const dynamicHeight = SelectedArticle.length * 80;
  const totalPrice = parseFloat(
    SelectedArticle.reduce((total, item) => total + item.total, 0).toFixed(2)
  );

  return (

      <p className="mt-4 text-center text-lg font-bold">My Order</p>
      <CloseModal onClick={setisOpen} />
      <div className='h-[750px] w-full overflow-y-auto'>
        {hydration && SelectedArticle.length !== 0 &&
          SelectedArticle?.map((article) => (
            <div className="flex w-full items-center justify-center" key={article.id}>
              <ProductDetail product={article}/>
              <AddRemoveButton id={article.id} />
              <DeleteProduct id={article.id} />
            </div>
          ))}
      </div>
      {hydration && <TotalPriceButton total={totalPrice} />}
  
  );
};

export default ProductsCart;
