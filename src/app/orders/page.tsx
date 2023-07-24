'use client'
import React from 'react'
import { MyOrdersStore } from '@/store/MyOrdersStore';

const Orders = ():React.ReactElement => {
const { Orders } = MyOrdersStore()
  console.log(Orders)
return (
    <h1>My orders</h1>
)
}

export default Orders;