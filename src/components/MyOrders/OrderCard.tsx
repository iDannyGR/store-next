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
      className="relative grid h-32 w-[450px] grid-cols-3 grid-rows-3 gap-1 items-center text-center rounded-lg bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
      key={order.id}
    >
      <p className="col-span-3 font-semibold">Order Number: {order.id.toUpperCase()}</p>
      <GoToOrder id={order.id} />
      <BanknotesIcon className="row-start-2 w-6" />
      <ListBulletIcon className="row-start-2 w-6" />
      <CalendarDaysIcon className="row-start-2 w-6" />
      <p className="row-start-3">${order.totalPrice}</p>
      <p className="row-start-3">Total of Items: {order.totalProducts}</p>
      <p className="row-start-3">{order.date.split(',')[0]}</p>
    </div>
  );
};

export default OrderCard