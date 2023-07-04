import React from 'react';
import MenuItem from './MenuItem';
import {dta, routes } from '@/assets/ListMenus'



const Navbar = () => {
  return (
    <nav className='sticky top-0 flex justify-between z-10'>
      <MenuItem menu={routes} />
      <MenuItem menu={dta} />
    </nav>
  );
}

export default Navbar