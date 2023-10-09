import React from 'react';
import {dta, routes } from '@/assets/ListMenus'
import MenuItem from './MenuItem';
import SearchBar from '@/components/SearchBar';
import NotificationButton from '../ShoppingCart/NotificationButton';



const Navbar = ():React.ReactElement => {
  return (
    <nav className="sticky top-0 z-10 flex bg-white shadow-lg">
      <div className="flex w-[90%] justify-between">
        <MenuItem menu={routes} mainTitle="Store" />
        <SearchBar />
        <MenuItem menu={dta} mainTitle="soporte@admin.com" />
      </div>
      <NotificationButton />
    </nav>
  );
}

export default React.memo(Navbar)