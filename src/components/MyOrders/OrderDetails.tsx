'use client'
import Image from 'next/image';
import { MyOrdersStore } from '@/store/MyOrdersStore';
import { useHasHydrated } from '@/hooks/useHasHydrated';
import { useParams } from 'next/navigation';


const OrderDetails = () => {
  const { Orders } = MyOrdersStore(); 
  const { id } = useParams();
  const ActualOrder = Orders[id];
  const articles = Object.values(ActualOrder.items);
  const hydrated = useHasHydrated();

  return (
    <article className="flex h-auto max-w-[550px] flex-col rounded-xl p-2 gap-4">
      <p className="text-center font-bold">Products</p>
      {hydrated &&
        articles.map((article) => (
          <div className="flex w-full items-center justify-between rounded-lg p-4 shadow-lg">
            <p className="text-sm">{article.title}</p>
            <p className='mx-4'>{article.quantity}</p>
            <Image
              alt={article.title}
              src={article.image}
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
        ))}
      <div className="flex w-full justify-around mt-6">
        <p className="font-bold">Quantity: {ActualOrder.totalProducts} </p>
        <p className="font-bold">Total: $ {ActualOrder.totalPrice} </p>
      </div>
    </article>
  );
};

export default OrderDetails;