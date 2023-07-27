import React from 'react'
import { MyOrdersStore } from '@/store/MyOrdersStore';
import ProductDetail from '../ShoppingCart/ProductDetail';

type Props = {}

const MyOrder = (props: Props):React.ReactElement => {
  const { Orders } = MyOrdersStore()
  const Produts = Object.values(Orders)[0].items
  return (
    <div className="h-auto w-[500px] rounded-xl border">
      <p>Order ID: {Object.values(Orders)[0].date}</p>
      <p>Date:{Object.values(Orders)[0].date} </p>
      <div className="flex w-full flex-col items-center justify-center ">
        <p className="font-bold">Products</p>
        {Object.values(Produts).map((item) => (
          <ProductDetail product={item} />
        ))}
      </div>
      <div className='flex justify-around'>
        <p className='font-bold'>Quantity: {Object.values(Orders)[0].totalProducts}</p>
        <p className='font-bold'>Total: $ {Object.values(Orders)[0].totalPrice}</p>
      </div>
    </div>
  );
}

export default MyOrder