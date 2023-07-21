'use client'

import React from 'react';
import {  ArticleDetail } from '@/store/ArticleDetailStore';
import cx from 'classnames';
import { XMarkIcon } from '@heroicons/react/24/outline';
import ProductDescription from './ProductDescription';

const NotificationItem = (): React.ReactElement => {
  const { item, isShow, setisShow } = ArticleDetail();
  return (
    <div
      className={cx(
        'fixed right-8 z-20 mt-3 flex w-96 flex-col rounded-lg border bg-white p-3 transition duration-150 ease-in-out',
        {
          'hidden translate-x-0 opacity-0 ': isShow == false,
          'visible translate-x-5 opacity-100': isShow == true
        }
      )}
    >
      <p className="mt-4 text-center text-lg font-bold">Product Details</p>
      <XMarkIcon
        className="absolute right-1 top-1 h-6 w-6 cursor-pointer text-red-500"
        onClick={() => setisShow(false)}
      />
      <ProductDescription product={item} />
    </div>
  );
};

export default NotificationItem;
