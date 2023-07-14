'use client';
import React from 'react';
import { useHasHydrated } from '@/hooks/useHasHydrated';
import { ShopingCarStore } from '@/store/ShopingCarStore';
import cx from 'classnames';
import { XMarkIcon } from '@heroicons/react/24/outline';

const NotificationItem = (): React.ReactElement => {
  const hydration = useHasHydrated();
  const { item, setisOpen, isOpen } = ShopingCarStore();
  return (
    <aside
      className={cx(
        'fixed right-8 z-20 mt-3 flex w-96 flex-col rounded-lg border bg-white p-3 transition duration-150 ease-in-out',
        {
          'hidden translate-x-0 opacity-0 ': isOpen == false,
          'visible translate-x-5 opacity-100': isOpen == true
        }
      )}
    >
      <p className="mt-4 text-center text-lg font-bold">Product Details</p>
      <XMarkIcon
        className="absolute right-1 top-1 h-6 w-6 cursor-pointer text-red-500"
        onClick={() => setisOpen(false)}
      />
      <ProductDetail product={article} key={index} />)
    </aside>
  );
};

export default NotificationItem;
