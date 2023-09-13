'use client'
import React from 'react';
import Image from 'next/image';
import CloseModal from './buttons/CloseModal';
import { ArticleDetail } from '@/store/ArticleDetailStore';
import { ShopingCarStore } from '@/store/ShopingCarStore';


const ProductDescription = (): React.ReactElement => {
  const { item } = ArticleDetail();
  const { setisOpen,isOpen } = ShopingCarStore();
  
  return (
    <div className={isOpen ? 'gap-y-4 flex w-full h-full flex-col items-center p-8':'hidden'}>
      <CloseModal onClick={setisOpen} />
      <p className="mt-4 text-center text-lg font-bold">Product Details</p>
      <Image
        src={item.image}
        width={250}
        height={250}
        alt={item.title}
        className="rounded-lg object-cover"
      />
      <p className="text-center text-md font-bold"> {item.title} </p>
      <p className="text-lg font-semibold"> $ {item.price} </p>
      <p className="text-justify text-md font-medium"> {item.description} </p>
    </div>
  );
};

export default ProductDescription;
