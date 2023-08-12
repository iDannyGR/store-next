'use client'
import React from 'react'
import cx from 'classnames';
import { ShopingCarStore } from '@/store/ShopingCarStore';

type Props = {
    children : React.ReactElement
}

const SideBar = (props: Props):React.ReactElement => {
  
  const { item, setisOpen, isOpen } = ShopingCarStore();

  return (
    <aside 
    className={cx(
        `fixed h-[100vh] right-0 z-20 flex flex-col items-center bg-white shadow-2xl transition-all ease-in-out duration-350`,
        {
          'opacity-0 w-0': isOpen == false,
          'w-[450px]': isOpen == true
        }
      )}>
        {props.children}
    </aside>
  )
}

export default SideBar