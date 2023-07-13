'use client'
import React from 'react';
import { GetData } from '@/models/GetData';
import { TrashIcon } from '@heroicons/react/24/outline';
import { ShopingCarStore } from '@/store/ShopingCarStore';
import Image from 'next/image';


type Props = {
  product: GetData
};

const ProductDetail = ({product}: Props): React.ReactElement => {
    const { deleteArticle } = ShopingCarStore()
  return (
    <div className="relative flex h-1/4 w-full mt-4 p-2 flex-col items-center justify-between gap-2 border-dashed border-b-2">
      <TrashIcon
        className="absolute right-1 top-4 h-6 w-6 cursor-pointer text-neutral-800 transition duration-200 ease-in hover:scale-150"
        onClick={() => deleteArticle(product.id)}
      />
      <p className="text-lg font-bold">{product.title}</p>
      <p className="text-lg font-semibold"> $ {product.price}</p>
      <Image src={product.image} width={150} height={150} alt={product.title} className="rounded-2xl" />
      <p className="text-justify text-gray-700 text-sm">{product.description}</p>
    </div>
  );
};

export default ProductDetail;
