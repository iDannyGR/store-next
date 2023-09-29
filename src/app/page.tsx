import Card from '@/components/Card';


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
