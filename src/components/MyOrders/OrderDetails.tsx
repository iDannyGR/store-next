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
    <article className="flex h-auto max-w-[650px] flex-col rounded-xl p-2 gap-4 bg-white">
      <h2 className="text-center font-bold text-2xl">Products</h2>
      {hydrated &&
        articles.map((article) => (
          <div className="flex w-[550px] items-center justify-between p-4 border-b-2">
            <Image
              alt={article.title}
              src={article.image}
              width={40}
              height={40}
              className="object-cover"
            />
            <p className="text-md">{article.title}</p>
            <p className='mx-4'>{article.quantity}</p>
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