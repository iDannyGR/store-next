import { ShopingCarStore } from '@/store/ShopingCarStore';
import { GetData } from '@/models/GetData';



export const useStoreProducts = ()=>{
  
  const { item, setArticle, deleteArticle } = ShopingCarStore();

  const addProduct = (product:GetData) => {
        const existingItem = item[product.id];
        const newItem = {
          ...product,
          quantity: existingItem ? existingItem.quantity + 1 : 1,
          total: existingItem ? (existingItem.quantity + 1) * product.price : product.price
        };
        setArticle(newItem)
    }

    const setSumProduct = (id: GetData['id']) => {

      const itemToUpdate = item[id];

      if (itemToUpdate) {
        const updatedItem = {
          ...itemToUpdate,
          quantity: itemToUpdate.quantity + 1,
          total: itemToUpdate.total + itemToUpdate.price
        };
        console.log(updatedItem.quantity)
        setArticle(updatedItem);
      }
    };  

    const setRemProduct = (id: GetData['id']) => {
      const itemToUpdate = item[id];
      
        if (itemToUpdate.quantity <= 1) {
          deleteArticle(id);
          return;
        }

      const updatedItem = {
        ...itemToUpdate,
        quantity: itemToUpdate.quantity - 1,
        total: itemToUpdate.total - itemToUpdate.price
      };
      console.log(itemToUpdate.quantity)
      setArticle(updatedItem);
    };
  
    return { addProduct, setSumProduct, setRemProduct };

}