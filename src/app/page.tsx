import Card from '@/components/Card';
import { getData } from '@/utils/GetData';
import Lottie from 'lottie-react';
import noSearch from '@/assets/noSearch.json'


type Props = {
  searchParams?: {search?: string};
};

 export default async function Home({ searchParams }:Props) {
   const data = await getData();
   let filterData
        if(data && searchParams?.search ){
           filterData = data.filter(article => article.title.toLowerCase().includes(searchParams.search as string))
        }else{
            filterData = data
        }
        console.log(data)
   return (
     <article className="grid grid-cols-4 gap-12">
      {data.length === 0 && <Lottie animationData={noSearch}/>}
      {data && filterData.map((product) => <Card product={product} />)}
     </article>
   );
 }
