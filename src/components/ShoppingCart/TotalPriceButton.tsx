'use client'
import React from 'react';
import { MyOrdersStore } from '@/store/MyOrdersStore';
import { ShopingCarStore } from '@/store/ShopingCarStore';
import { GetData } from '@/models/GetData';
type Props = {
    total:number
}

const TotalPriceButton = ({total}: Props) => {
    const { setOrder } = MyOrdersStore();
    const { item, setArticle  }= ShopingCarStore();

    const handleSubmit = () => {
        const totalProducts = Object.values(item).reduce((total, item) => total + item.quantity, 0)
        const Order = {
            date: new Date().toISOString(),
            items:item,
            totalProducts: totalProducts,
            totalPrice:total,
        }
        setOrder(Order);
        setArticle({} as GetData);
    }

  return (
    <button 
      className='absolute bottom-0 w-72 bg-red-500 text-white rounded-md p-3 my-2 hover:bg-red-950'
      onClick={()=> handleSubmit()}
      disabled={true} >
      {total ? 'Check Out $' +  total : 'add a product' }
    </button>
  )
}

export default TotalPriceButton