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
    <article className="flex max-h-[80vh] max-w-[650px] flex-col gap-4 overflow-y-auto rounded-xl bg-white shadow-xl p-2">
      <h2 className="text-center text-2xl font-bold">Products</h2>
      <div className="overflow-y-auto">
        {hydrated &&
          articles.map((article) => (
            <div className="flex w-[550px] items-center justify-between  border-b-2 p-4">
              <Image
                alt={article.title}
                src={article.image}
                width={40}
                height={40}
                className="object-cover"
              />
              <p className="text-md">{article.title}</p>
              <p className="mx-4">{article.quantity}</p>
            </div>
          ))}
      </div>
      <div className="mt-6 flex w-full justify-around">
        <p className="font-bold">Quantity: {ActualOrder.totalProducts} </p>
        <p className="font-bold">Total: $ {ActualOrder.totalPrice} </p>
      </div>
    </article>
  );
};

export default OrderDetails;