import Image from 'next/image';
import { MyOrders } from '@/models/MyOrders';
import { useHasHydrated } from '@/hooks/useHasHydrated';

type OrdersProps = {
  order:MyOrders
}

const OrderCard = ({ order }: OrdersProps) => {
  const items = Object.values(order.items)
  const hydrated = useHasHydrated()
  return (
    <article className="h-auto w-[350px] rounded-xl shadow-md space-y-3" key={order.date}>
      <p>Order ID: </p>
      <p>Date:{order.date}</p>
        <p className="font-bold text-center">Products</p>
        {hydrated && items.map( item => (
      <div className="flex w-full gap-9  items-center justify-center rounded-lg">
            <p>{item.title}</p>
            <Image 
            alt={item.title}
            src={item.image}
            width={50}
            height={50}
            />
          </div>
        ))}
      <div className="flex justify-around">
        <p className="font-bold">Quantity: {order.totalProducts} </p>
        <p className="font-bold">Total: $ {order.totalPrice} </p>
      </div>
    </article>
  );
};

export default OrderCard