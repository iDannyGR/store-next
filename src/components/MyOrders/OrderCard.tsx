'use client'
import { BanknotesIcon } from '@heroicons/react/24/outline'
import { ListBulletIcon } from '@heroicons/react/24/outline'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import { MyOrders } from '@/models/MyOrders';
import GoToOrder from '../buttons/GoToOrder';
type OrderProps = {
    order : MyOrders
}

const OrderCard = ({order}: OrderProps) => {
  return (
    <div className="relative flex flex-col justify-center items-center h-32 w-[450px] rounded-lg bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <GoToOrder id={order.id} />
        <p className="text-center font-semibold">Order Number: {order.id.toUpperCase()}</p>
        <div className='flex h-12 w-[65%] justify-between'>
          <BanknotesIcon className="w-6" />
          <ListBulletIcon className="w-6" />
          <CalendarDaysIcon className="w-6" />
        </div>
        <div className='flex w-[75%] justify-between'>
          <p className="row-start-3">${order.totalPrice}</p>
          <p className="row-start-3">Total of Items: {order.totalProducts}</p>
          <p className="row-start-3">{order.date.split(',')[0]}</p>
        </div>
    </div>
  );
};

export default OrderCard