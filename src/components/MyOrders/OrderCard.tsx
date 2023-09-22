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
      className="relative flex h-32 w-[450px] items-center justify-center gap-4 rounded-lg p-4 shadow-lg"
      key={order.id}
    >
      <GoToOrder id={order.id}/>
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