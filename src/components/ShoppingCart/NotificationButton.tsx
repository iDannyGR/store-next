'use client'
import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { ShopingCarStore } from '@/store/ShopingCarStore';
import { ArticleDetail } from '@/store/ArticleDetailStore';
import { useHasHydrated } from '@/hooks/useHasHydrated';



const NotificationButton = ():React.ReactElement=> {
  const hydration = useHasHydrated()
  const { item, setisOpen, isOpen } = ShopingCarStore();
  const { setisShow } = ArticleDetail();
  
  const count = Object.keys(item).length > 0 ? Object.values(item).length : 0;

    const handleClick = () =>{
      setisOpen(!isOpen);
      setisShow(false);
    }


  
  return (
    <div
      className="relative flex w-12 cursor-pointer items-center justify-center "
      onClick={handleClick}
    >
      <p className="absolute right-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-black text-sm text-white">
        {hydration  && count}
      </p>
      <ShoppingCartIcon className="h-8 w-8 text-gray-500" />
    </div>
  );
}

export default NotificationButton;