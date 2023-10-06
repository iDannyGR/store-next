'use client'
import { MyOrdersStore } from '@/store/MyOrdersStore';
import OrderCard from './OrderCard';

const MyOrder = ():React.ReactElement => {
    const { Orders } = MyOrdersStore();
    const StoredOrders =  Object.values(Orders);
  return (
      <div className='w-full h-full grid grid-flow-col grid-col-4 grid-rows-4 gap-8 overflow-y-auto'>
        {StoredOrders.map(Order => (
        <OrderCard  order={Order} key={Order.id}/>
        ))}
    </div>
  )
}

export default MyOrder