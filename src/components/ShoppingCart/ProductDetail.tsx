'use client'
import React from 'react';
import { GetData } from '@/models/GetData';
import { TrashIcon } from '@heroicons/react/24/outline';
import { ShopingCarStore } from '@/store/ShopingCarStore';
import Image from 'next/image';
import AddRemoveButton from '../buttons/AddRemoveButton';


type Props = {
  product: GetData
};

const ProductDetail = ({product}: Props): React.ReactElement => {
    const { deleteArticle } = ShopingCarStore()

  return (
    <div className="flex w-full items-center justify-between p-3">
      <div className="flex items-center justify-center">
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
      </div>
      <AddRemoveButton />
      <p className="text-md"> $ {product.price.toFixed(2)}</p>
      <TrashIcon
        className="h-6 w-6 cursor-pointer text-rose-800 transition duration-200 ease-in hover:scale-150"
        onClick={() => deleteArticle(product.id)}
      />
    </div>
  );
};

export default ProductDetail;
