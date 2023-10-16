
import Card from '@/components/Card';
import { getData } from '@/utils/GetData';

interface ParamsProps {
  params: { category: string };
}
export default async function categories({params}:ParamsProps) {
  const {category} = params
  const data = await getData(category);
  
  return (
    <article className="grid grid-cols-4 gap-12">
      {data && data.map((product) => <Card product={product} />)}
    </article>
  );
}
