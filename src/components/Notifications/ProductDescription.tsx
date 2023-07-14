import React from 'react';
import { GetData } from '@/models/GetData';
import Image from 'next/image';

type Props = {
  product: GetData;
};

const ProductDescription = ({ product }: Props): React.ReactElement => {

  return (
    <div className="my-1 flex flex-col w-full items-center justify-between p-3">
        <Image
          src={product.image}
          width={250}
          height={250}
          alt={product.title}
          className="rounded-lg object-cover"
        />
        <p className="text-center text-lg font-bold"> {product.title} </p>
      <p className="text-lg font-semibold"> $ {product.price} </p>
      <p className="text-justify text-lg font-medium"> {product.description} </p>
    </div>
  );
};

export default ProductDescription;
