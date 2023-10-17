import { getData } from '@/utils/GetData';

interface searchProps {
  search?: string,
  category?:string
}

export  const useSearch = async ({search='', category=''}:searchProps) => {
  
  
  const data = await getData(category);
   let filterData;

   if (data && search) {
     filterData = data.filter((article) => article.title.toLowerCase().includes(search as string));
   } else {
     filterData = data;
   }
   
  return filterData
}
