import { MyOrders } from '@/models/MyOrders';

type OrdersProps = {
  order:MyOrders
}

const OrderCard = ({ order }: OrdersProps) => {
  const items = Object.values(order.items)
  return (
    <article className="h-auto w-[500px] rounded-xl shadow-md" key={order.date}>
      <p>Order ID: </p>
      <p>Date:{order.date}</p>
      <div className="flex w-full flex-col items-center justify-center ">
        <p className="font-bold">Products</p>
        {items.map( item => (
          
        ))}
      </div>
      <div className="flex justify-around">
        <p className="font-bold">Quantity: {order.totalProducts} </p>
        <p className="font-bold">Total: $ {order.totalPrice} </p>
      </div>
    </article>
  );
};

export default OrderCard