'use client'
import React from 'react'
import cx from 'classnames';
import { ShopingCarStore } from '@/store/ShopingCarStore';
import { ArticleDetail } from '@/store/ArticleDetailStore';
import ProductDescription from './ProductDescription';
import ProductsCart from './ShoppingCart';



const SideBar = ():React.ReactElement => {
  
  const { isOpen, item } = ShopingCarStore();
  const { isShow } = ArticleDetail();

  return (
    <aside 
    className={cx(
        `fixed h-[100vh] right-0 z-20 flex flex-col items-center bg-white shadow-2xl transition ease-in-out duration-350`,
        {
          'opacity-0 w-0': isOpen === false,
          'w-[450px]': isOpen === true
        }
      )}>
        {isShow && isOpen ? <ProductDescription /> : <ProductsCart />}
    </aside>
  )
}

export default SideBar