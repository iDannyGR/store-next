import { routes } from '@/models/MenuList'

let routes: routes[] = [
  {
    name: 'All',
    route: '/'
  },
  {
    name: 'Jewelery',
    route: '/jewelery'
  },
  {
    name: 'Electronics',
    route: '/electronics'
  },
  {
    name: "men's clothing",
    route: "/men's clothing"
  },
  {
    name: "women's clothing",
    route: "/women's clothing"
  }
];

let dta: routes[] = [
  {
    name: 'My Orders',
    route: 'orders',
  },
  {
    name: 'My Account',
    route: 'account',
  },
  {
    name: 'sign In',
    route: 'login',
  },
];

export {dta, routes}

