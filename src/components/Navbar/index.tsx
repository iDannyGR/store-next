import React from 'react';
import MenuItem from './MenuItem';
import {dta, routes } from '@/assets/ListMenus'
import NotificationCart from '../ShoppingCart/NotificationCart';



const Navbar = () => {
  return (
    <nav className='sticky top-0 flex z-10 bg-white shadow-lg'>
      <div className='flex justify-between w-[90%]'>
        <MenuItem menu={routes} mainTitle='Store'/>
        <MenuItem menu={dta} mainTitle='soporte@admin.com' /> 
      </div>
      <NotificationCart />
    </nav>
  );
}

export default Navbar