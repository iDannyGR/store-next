'use client'
import { MyOrdersStore } from '@/store/MyOrdersStore';
import OrderCard from './OrderCard';

const MyOrder = ():React.ReactElement => {
    const { Orders } = MyOrdersStore();
    const StoredOrders =  Object.values(Orders);
  return (
  <div className='grid grid-flow-col grid-col-3 grid-rows-3 gap-8'>
    {StoredOrders.map(Order => (
     <OrderCard  order={Order}/>
    ))}
  </div>
  )
}

export default MyOrder