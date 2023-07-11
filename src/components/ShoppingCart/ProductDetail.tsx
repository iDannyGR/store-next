'use client'
import React from 'react';
import { GetData } from '@/models/GetData';

type Props = {
  product: GetData
};

const ProductDetail = ({product}: Props): React.ReactElement => {
  return <div className='w-full h-1/4'>
      <p>{product.title}</p>
    </div>
};

export default ProductDetail;
