import Image from 'next/image';
import { MyOrders } from '@/models/MyOrders';
import { useHasHydrated } from '@/hooks/useHasHydrated';

type OrdersProps = {
  order:MyOrders
}

const OrderDetails = ({ order }: OrdersProps) => {
  const items = Object.values(order.items)
  const hydrated = useHasHydrated()
  return (
    <article className="flex flex-col h-auto max-w-[350px] rounded-xl shadow-md space-y-3 p-2" key={order.date}>
        <p className="font-bold text-center">Products</p>
        {hydrated && items.map( item => (
      <div className="flex w-full items-center justify-center rounded-lg gap-3 p-4">
            <p className='text-sm truncate'>{item.title}</p>
            <Image 
            alt={item.title}
            src={item.image}
            width={40}
            height={40}
            className='shadow-sm rounded-sm object-cover'
            />
          </div>
        ))}
      <div className="flex w-full justify-around">
        <p className="font-bold">Quantity: {order.totalProducts} </p>
        <p className="font-bold">Total: $ {order.totalPrice} </p>
      </div>
    </article>
  );
};

export default OrderDetails;