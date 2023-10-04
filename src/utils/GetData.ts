import { GetData } from '@/models/GetData';

export async function getData(category?:string): Promise<GetData[]> {
    

  try {
    let response;

    if (category) {
      response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    }  else {
      response = await fetch('https://fakestoreapi.com/products');
    }

    const data = await response.json();
    let products: GetData[] = data;

    // Filtrar productos si hay una cadena de búsqueda
   
    return products;
    
  } catch (error) {
    console.log(error);
    throw new Error('Error al obtener los datos');
  }
}