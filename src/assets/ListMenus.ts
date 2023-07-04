import { routes } from '@/models/MenuList'

let routes: routes[] = [
  {
    name: 'Home',
    route: '/',
  },
  {
    name: 'All',
    route: '/all',
  },
  {
    name: 'Clothes',
    route: '/clothes',
  },
  {
    name: 'Electronics',
    route: '/electronics',
  },
  {
    name: 'Furnitures',
    route: '/furnitures',
  },
  {
    name: 'Toys',
    route: '/toys',
  },
  {
    name: 'Others',
    route: '/others',
  },
];

let dta: routes[] = [
  {
    name: 'supports@admin.com',
    route: '/',
  },
  {
    name: 'My Orders',
    route: '/orders',
  },
  {
    name: 'My Account',
    route: '/account',
  },
  {
    name: 'sign In',
    route: '/login',
  },
];

export {dta, routes}