'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { routes } from '@/models/MenuList';

type Props = {
  menu: routes[];
};

const MenuItem = ({ menu }: Props) => {
  
  const currentNav = usePathname();

  return (
    <ul className='m-5 flex gap-3 font-semibold'>
      {menu.map((item: routes, index:number) => (
        <li key={index}>
          <Link
            href={item.route}
            className={
              currentNav === item.route
                ? 'text-red-600 underline decoration-solid'
                : ''
            }
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuItem;
