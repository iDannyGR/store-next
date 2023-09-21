'use client'
import React from 'react';
import { MyOrdersStore } from '@/store/MyOrdersStore';
import { ShopingCarStore } from '@/store/ShopingCarStore';
import { RamdomId } from '@/hooks/useRamdomId';



const TotalPriceButton = ():React.ReactElement => {
    const { setOrder } = MyOrdersStore();
    const { item, clearCart  }= ShopingCarStore();
    const Products = Object.values(item);
     const totalPrice = parseFloat(Products.reduce((total, item) => total + item.total, 0).toFixed(2));
    const handleSubmit = () => {
        const totalProducts = Products.reduce((total, item) => total + item.quantity, 0)
        const Order = {
          id: RamdomId(),
          date: new Date().toUTCString(),
          items: item,
          totalProducts: totalProducts,
          totalPrice: totalPrice
        };
        setOrder(Order);
        clearCart();

    }

  return (
    <button
      className="my-2 w-72 rounded-md bg-red-500 p-3 text-white hover:bg-red-950"
      onClick={() => handleSubmit()}
      disabled={Products.length === 0}
    >
      {totalPrice ? 'Check Out $' + totalPrice : 'add a product'}
    </button>
  );
}

export default TotalPriceButton