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
    <div
      className="relative flex h-32 w-[450px] rounded-lg bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
      key={order.id}
    >
      <p className='absolute top-0 font-semibold'>Order Number: {order.id.toUpperCase()}</p>
      <GoToOrder id={order.id} />
      <BanknotesIcon className="h-6 w-6" />
      <p>${order.totalPrice}</p>
      <p>Total of Items: {order.totalProducts}</p>
      <ListBulletIcon className="h-6 w-6" />
      <p>{order.date.split(',')[0]}</p>
      <CalendarDaysIcon className="h-6 w-6" />
    </div>
  );
};

export default OrderCard