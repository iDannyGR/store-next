import Card from '@/components/Card';
import SearchEmpty from '@/components/SearchEmpty';
import { useSearch } from '@/hooks/useSearch';


type Props = {
  searchParams: {search: string};
};

 export default async function Home({ searchParams }:Props) {
   
   const { search } = searchParams
   const filterData = await useSearch(search)

   return (
     <article className="grid grid-cols-4 gap-12">
       {filterData.length === 0 && <SearchEmpty />}
       {filterData.map((product) => <Card product={product} />)}
     </article>
   );
 }
