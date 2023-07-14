'use client'
import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { ShopingCarStore, ArticleDetail } from '@/store/ShopingCarStore';
import { useHasHydrated } from '@/hooks/useHasHydrated';

const NotificationCart = ():React.ReactElement=> {
  const { item, setisOpen, isOpen } = ShopingCarStore();
  const { setisShow } = ArticleDetail();
  const hydration = useHasHydrated();

    const handleClick = () =>{
      setisOpen(!isOpen);
      setisShow(false);
    }

  return (
      <div className='relative w-12 flex items-center justify-center cursor-pointer ' onClick={handleClick}>
        <p className='absolute h-6 w-6 flex items-center justify-center rounded-full text-sm top-0 right-0 bg-black text-white'>{hydration && item.length}</p> 
        <ShoppingCartIcon className="h-8 w-8 text-gray-500" />
      </div>
    );
}

export default NotificationCart