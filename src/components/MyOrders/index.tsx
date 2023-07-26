import React from 'react'
import ProductDetail from '../ShoppingCart/ProductDetail'

type Props = {}

const MyOrder = (props: Props) => {
  return (
    <div className='border w-[500px] h-auto rounded-xl'>
        <p>Order ID: </p>
        <p>Date: </p>
        <div className='flex items-center justify-center'>
            <p className='font-bold'>Products</p>
        </div>
        <p>Quantity:</p>
        <p>Total: </p>
    </div>
  )
}

export default MyOrder