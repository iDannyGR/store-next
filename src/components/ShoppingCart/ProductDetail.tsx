'use client'
import React from 'react';
import { GetData } from '@/models/GetData';
import { TrashIcon } from '@heroicons/react/24/outline';
import { ShopingCarStore } from '@/store/ShopingCarStore';


type Props = {
  product: GetData
};

const ProductDetail = ({product}: Props): React.ReactElement => {
    const { deleteArticle } = ShopingCarStore()
  return (
    <div className="h-1/4 w-full flex p-2 justify-between">
      <p>{product.title}</p>
      <TrashIcon 
        className="h-6 w-6 text-red-500 cursor-pointer "
        onClick={()=> deleteArticle( product.id )} />
    </div>
  );
};

export default ProductDetail;
