import { GetData } from '@/models/GetData';
export async function getData(category?:string):Promise<GetData[]> {
    let response;

    if(category){
         response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    }else{
         response = await fetch('https://fakestoreapi.com/products');
    }
    
    const data =  await response.json();
     if (response.ok) {
       // Validar y tipar los datos utilizando la interfaz GetData
       const products: GetData[] = data;
       return products;
     } else {
       throw new Error('Error al obtener los datos');
     }
}