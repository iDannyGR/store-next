import React from 'react';
import Image from 'next/image';
import CloseModal from './buttons/CloseModal';
import { GetData } from '@/models/GetData';
import { ArticleDetail } from '@/store/ArticleDetailStore';

type Props = {
  product: GetData;
};

const ProductDescription = ({ product }: Props): React.ReactElement => {
  const { setisShow } = ArticleDetail();

  return (
    <div className="my-1 flex w-full flex-col items-center justify-between p-3">
      <CloseModal onClick={setisShow} />
      <p className="mt-4 text-center text-lg font-bold">Product Details</p>
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
