import { NavLink } from '@/types/nav.type';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  {
    label: 'Category',
    href: '#',
    SUBMENU: [
      { label: 'Subcategory 1', href: '/subcategory1' },
      { label: 'Subcategory 2', href: '/subcategory2' },
    ],
  },
  { label: 'Login', href: '/login' },
  { label: 'Signup', href: '/signup' },
  { label: 'Dashboard', href: '/dashboard', protected: true },
];
