'use client'

import Card from '@/components/Card';
import { getData } from '@/utils/GetData';
import { useParams } from 'next/navigation';

export default async function categories() {
  const {category} = useParams()
  const data = await getData(category);
  
  return (
    <article className="grid grid-cols-4 gap-12">
      {data && data.map((product) => <Card product={product} />)}
    </article>
  );
}
