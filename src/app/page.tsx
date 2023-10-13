import Card from '@/components/Card';
import { getData } from '@/utils/GetData';

 export default async function Home({ searchParams }) {
   console.log(searchParams);
   const data = await getData();
   return (
     <article className="grid grid-cols-4 gap-12">
       {data && data.map((product) => <Card product={product} />)}
     </article>
   );
 }
