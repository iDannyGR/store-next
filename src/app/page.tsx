import Card from '@/components/Card';
import { GetData } from '@/models/GetData';

async function getData(): Promise<GetData[]> {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();

  if (response.ok) {
    // Validar y tipar los datos utilizando la interfaz GetData
    const products: GetData[] = data;    
    return products;
  } else {
    throw new Error('Error al obtener los datos');
  }
}
 export default async function Home() {
 const data = await getData()
  return (
    <article className="grid grid-cols-4 gap-12">
      {data && data.map(product => (
        <Card product={product} />
      ))}
    </article>
  );
}
