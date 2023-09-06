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
  const { item, setisOpen,isOpen } = ShopingCarStore()
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
    <div className={isOpen ? 'flex h-full w-full flex-col items-center' : 'hidden'}>
      <p className="mt-4 text-center text-lg font-bold">My Order</p>
      <CloseModal onClick={setisOpen} />
      <div className="h-[750px] w-full overflow-y-auto">
        {hydration &&
          SelectedArticle.map((article) => {
            // Verificar si la cantidad del artículo es mayor que cero
            if (article.quantity > 0) {
              return (
                <div className="flex w-full items-center justify-center" key={article.id}>
                  <ProductDetail product={article} />
                  <AddRemoveButton id={article.id} />
                  <DeleteProduct id={article.id} />
                </div>
              );
            } else {
              // No mostrar el artículo si la cantidad es cero
              return null;
            }
          })}
      </div>
      {hydration && <TotalPriceButton total={totalPrice} />}
    </div>
  );
};

export default ProductsCart;
