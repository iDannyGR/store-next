import { getData } from '@/utils/GetData';

interface searchProps {
  search: string,
}

export  const useSearch = async ({search}:searchProps) => {
   const data = await getData();
   let filterData;

   if (data && search !== undefined && search !== '') {
     filterData = data.filter((article) => article.title.toLowerCase().includes(search));
   } else {
     filterData = data;
   }
   
  return filterData
}
