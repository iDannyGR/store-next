import { ShopingCarStore } from '@/store/ShopingCarStore';
import { GetData } from '@/models/GetData';

type value = {
  id: GetData['id'];
};

export const useStoreProducts = ()=>{
  
  const { item, setArticle } = ShopingCarStore();

  const addProduct = (product:GetData) => {

        const existingItem = item[product.id];

        const newItem = {
          ...product,
          quantity: existingItem ? existingItem.quantity + 1 : 1,
          total: existingItem ? (existingItem.quantity + 1) * product.price : product.price
        };
        console.log(newItem)
        setArticle(newItem)
    }

    const setSumProduct = ({id}: value) => {
      const itemToUpdate = item[id];
      if (itemToUpdate) {
        const updatedItem = {
          ...itemToUpdate,
          quantity: itemToUpdate.quantity + 1,
          total: itemToUpdate.total + itemToUpdate.price
        };
        setArticle(updatedItem);
      }
    };

    const setRemProduct = ({id}:value) => {
      const itemToUpdate = item[id];

      if (itemToUpdate && itemToUpdate.quantity > 0) {
        const updatedItem = {
          ...itemToUpdate,
          quantity: itemToUpdate.quantity - 1,
          total: itemToUpdate.total - itemToUpdate.price
        };
        setArticle(updatedItem);
      }
    };
    
    return { addProduct, setSumProduct, setRemProduct };

}