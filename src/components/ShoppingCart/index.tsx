'use client';
import React from 'react';
import { useHasHydrated } from '@/hooks/useHasHydrated';
import ProductDetail from './ProductDetail';
import TotalPriceButton from './TotalPriceButton';
import AddRemoveButton from '../buttons/AddRemoveButton';
import DeleteProduct from '../buttons/DeleteProduct';
import CloseModal from '../buttons/CloseModal';
import { ShopingCarStore } from '@/store/ShopingCarStore';



const ProductsCart = (): React.ReactElement => {
  const { item, setisOpen } = ShopingCarStore()
  const hydration = useHasHydrated();
  const SelectedArticle =  Object.values(item);
  const totalPrice = parseFloat(
    SelectedArticle.reduce((total, item) => total + item.total, 0).toFixed(2)
  );

    React.useEffect(() => {
      if (!hydration) {
        // Limpiar el estado del componente después de que se elimine el artículo.
        
      }
    }, [item]);

  return (
    <div className='flex flex-col items-center w-full h-full'>
      <p className="mt-4 text-center text-lg font-bold">My Order</p>
      <CloseModal onClick={setisOpen} />
      <div className='h-[750px] w-full overflow-y-auto'>
        {hydration && SelectedArticle.length !== 0 &&
          SelectedArticle.map((article) => (
            <div className="flex w-full items-center justify-center">
              <ProductDetail product={article} key={article.id}/>
              <AddRemoveButton id={article.id} />
              <DeleteProduct id={article.id} />
            </div>
          ))}
      </div>
      {hydration && <TotalPriceButton total={totalPrice} />}
    </div>
 
  );
};

export default ProductsCart;
