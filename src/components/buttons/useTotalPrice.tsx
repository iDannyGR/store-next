import { useRouter } from 'next/navigation';
import { MyOrdersStore } from '@/store/MyOrdersStore';
import { ShopingCarStore } from '@/store/ShopingCarStore';
import { RamdomId } from '@/hooks/useRamdomId';

export const useTotalPrice = () => {

  const { setOrder } = MyOrdersStore();
  const router = useRouter();
  const { item, clearCart } = ShopingCarStore();
  const Products = Object.values(item);
  const totalPrice = parseFloat(Products.reduce((total, item) => total + item.total, 0).toFixed(2));

  const handleSubmit = () => {
    const totalProducts = Products.reduce((total, item) => total + item.quantity, 0);
    const Order = {
      id: RamdomId(),
      date: new Date().toLocaleString(),
      items: item,
      totalProducts: totalProducts,
      totalPrice: totalPrice
    };

    setOrder(Order);
    clearCart();
    router.push(`orders/${Order.id}`);
    
  };

  return {handleSubmit, Products, totalPrice}
};
