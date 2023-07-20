import { ShopingCarStore } from '@/store/ShopingCarStore';
import { GetData, Rating } from '@/models/GetData';

type value = {
  id: GetData['id'];
};

const { item, setArticle } = ShopingCarStore();
export const useStoreProducts = ()=>{

    const addProduct = (product:GetData) => {

        const existingItem = item[product.id];
        const newItem = {
          ...product,
          quantity: existingItem ? existingItem.quantity + 1 : 1,
          total: existingItem ? (existingItem.quantity + 1) * product.price : product.price
        };
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
        setArticle(itemToUpdate);
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
        setArticle(itemToUpdate);
      }
    };
    
    return { addProduct, setSumProduct, setRemProduct };

}