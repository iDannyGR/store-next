import Link from 'next/link';
import React from 'react'


type routes ={
    name:string,
    route:string
}

type Props = {}

let routes: routes[] = [
  {
    name: 'home',
    route: '/',
  },
  {
    name: 'login',
    route: '/login',
  },
  {
    name: 'myorder',
    route: '/myorder',
  },
  {
    name: 'orders',
    route: '/orders',
  },
  {
    name: 'account',
    route: '/account',
  },
];
const Navbar = (props: Props) => {
  return (
    <nav>
        <ul>
            {routes.map(link =>(
                <li><Link href={link.route}>{link.name}</Link></li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar