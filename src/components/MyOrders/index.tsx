'use client'
import React from 'react'
import { MyOrdersStore } from '@/store/MyOrdersStore';
import OrderCard from './OrderCard';

type Props = {}

const MyOrder = (props: Props):React.ReactElement => {
    const { Orders } = MyOrdersStore();
    const StoredOrders =  Object.values(Orders);

  return (

<p>hola</p>
  )
}

export default MyOrder