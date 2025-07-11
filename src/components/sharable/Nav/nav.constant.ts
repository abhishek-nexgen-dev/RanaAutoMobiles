import { NavType } from '@/types/nav.type';

export const NAV_LINKS: NavType[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '/contact' },
  {
    label: 'Category',
    href: '#',
    SUBMENU: [
      { label: 'Subcategory 1', href: '#' },
      { label: 'Subcategory 2', href: '#' },
    ],
  },
];
