import Card from '@/components/Card';
import SearchEmpty from '@/components/SearchEmpty';
import { getData } from '@/utils/GetData';



type Props = {
  searchParams: {search: string};
};

 export default async function Home({ searchParams }:Props) {
   const data = await getData();
   const { search } = searchParams
   let filterData
        if(data && searchParams?.search ){
           filterData = data.filter(article => article.title.toLowerCase().includes(search as string))
        }else{
            filterData = data
        }
   return (
     <article className="grid grid-cols-4 gap-12">
       {filterData.length === 0 && <SearchEmpty />}
       {data && filterData.map((product) => <Card product={product} />)}
     </article>
   );
 }
