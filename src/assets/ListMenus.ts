import { routes } from '@/models/MenuList'

let routes: routes[] = [
  {
    name: 'All',
    route: '/'
  },
  {
    name: 'Jewelery',
    route: '/categories/jewelery'
  },
  {
    name: 'Electronics',
    route: '/categories/electronics'
  },
  {
    name: "men's clothing",
    route: "/categories/men's clothing"
  },
  {
    name: "women's clothing",
    route: "/categories/women's clothing"
  }
];

let dta: routes[] = [
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

