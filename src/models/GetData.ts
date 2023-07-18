export interface GetData {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  quantity: number;
  total:number
}

export interface Rating {
  rate: number;
  count: number;
}
