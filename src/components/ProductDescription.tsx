'use client'
import React from 'react';
import Image from 'next/image';
import CloseModal from './buttons/CloseModal';
import { ArticleDetail } from '@/store/ArticleDetailStore';
import { ShopingCarStore } from '@/store/ShopingCarStore';


const ProductDescription = (): React.ReactElement => {
  const { item } = ArticleDetail();
  const { setisOpen } = ShopingCarStore();
  
  return (
    <div className="my-1 flex w-full flex-col items-center justify-between p-3">
      <CloseModal onClick={setisOpen} />
      <p className="mt-4 text-center text-lg font-bold">Product Details</p>
      <Image
        src={item.image}
        width={250}
        height={250}
        alt={item.title}
        className="rounded-lg object-cover"
      />
      <p className="text-center text-lg font-bold"> {item.title} </p>
      <p className="text-lg font-semibold"> $ {item.price} </p>
      <p className="text-justify text-lg font-medium"> {item.description} </p>
    </div>
  );
};

export default ProductDescription;
