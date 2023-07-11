'use client'
import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { ShopingCarStore } from '@/store/ShopingCarStore';

const NotificationCart = ():React.ReactElement=> {
    
  const { item } = ShopingCarStore();
  
  return (
      <div className='relative w-12 flex items-center justify-center'>
        <p className='absolute h-6 w-6 flex items-center justify-center rounded-full text-sm top-0 right-0 bg-black text-white'>{item.lenght}</p> 
        <ShoppingCartIcon className="h-8 w-8 text-gray-500" />
      </div>
    );
}

export default NotificationCart