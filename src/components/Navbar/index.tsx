import React from 'react';
import MenuItem from './MenuItem';
import {dta, routes } from '@/assets/ListMenus'
import NotificationButton from '../ShoppingCart/NotificationButton';



const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 flex bg-white shadow-lg">
      <div className="flex w-[90%] justify-between">
        <MenuItem menu={routes} mainTitle="Store" />
        <MenuItem menu={dta} mainTitle="soporte@admin.com" />
      </div>
      <NotificationButton />
    </nav>
  );
}

export default Navbar