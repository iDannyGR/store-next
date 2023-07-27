import React from 'react';
import { GetData } from '@/models/GetData';
import Image from 'next/image';


type Props = {
  product: GetData
};

const ProductDetail = ({product}: Props): React.ReactElement => {
  return (
    <div className="flex items-center justify-between p-3">
        <Image
          src={product.image}
          width={50}
          height={50}
          alt={product.title}
          className="rounded-lg object-cover"
        />
        <p className="w-40 overflow-hidden overflow-ellipsis text-center text-sm font-light">
          {product.title}
        </p>
      <p className="text-md"> $ {product.price.toFixed(2)}</p>
      </div>
  );
};

export default ProductDetail;
