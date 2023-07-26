'use client'

import React from 'react'
import { MyOrdersStore } from '@/store/MyOrdersStore';
import  MyOrder  from '@/components/MyOrders';

const Orders = ():React.ReactElement => {
const { Orders } = MyOrdersStore()
return (
  <section>
    <MyOrder />
  </section>
)
}

export default Orders;