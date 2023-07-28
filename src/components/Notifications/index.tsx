'use client'

import React from 'react';
import {  ArticleDetail } from '@/store/ArticleDetailStore';
import cx from 'classnames';
import ProductDescription from './ProductDescription';
import CloseModal from '../buttons/CloseModal';

const NotificationItem = (): React.ReactElement => {
  const { item, isShow, setisShow } = ArticleDetail();
  return (
    <div
      className={cx(
        'fixed right-8 z-20 mt-3 flex w-96 flex-col rounded-lg border bg-white p-3',
        {
          'hidden opacity-0 ': isShow == false,
          'visible opacity-100': isShow == true
        }
      )}
    >
      <p className="mt-4 text-center text-lg font-bold">Product Details</p>
      <CloseModal onClick={setisShow} />
      <ProductDescription product={item} />
    </div>
  );
};

export default NotificationItem;
