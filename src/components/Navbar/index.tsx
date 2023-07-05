import React from 'react';
import MenuItem from './MenuItem';
import {dta, routes } from '@/assets/ListMenus'



const Navbar = () => {
  return (
    <nav className='sticky top-0 flex justify-between z-10 bg-white shadow-lg'>
      <MenuItem menu={routes} mainTitle='Store'/>
      <MenuItem menu={dta} mainTitle='soporte@admin.com' />
    </nav>
  );
}

export default Navbar