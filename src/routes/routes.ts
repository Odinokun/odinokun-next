import { v4 as uuidv4 } from 'uuid';

import Home from '@/assets/icons/menu-icons/home.svg';
import CV from '@/assets/icons/menu-icons/cv.svg';
import Works from '@/assets/icons/menu-icons/works.svg';
import Blog from '@/assets/icons/menu-icons/blog.svg';
import Contacts from '@/assets/icons/menu-icons/contacts.svg';

import { IconType } from 'react-icons';

interface RoutType {
  id: string;
  path: string;
  label: string;
  available: boolean;
  icon: null | IconType;
  isDisabled: boolean;
}

export enum ROUTING_PATHES {
  HOME = '/',
  CV = '/cv',
  WORKS = '/works',
  BLOG = '/blog',
  CONTACTS = '/contacts',
}

export const ROUTES: RoutType[] = [
  {
    id: uuidv4(),
    path: ROUTING_PATHES.HOME,
    label: 'Home',
    available: false,
    icon: Home,
    isDisabled: false,
  },
  {
    id: uuidv4(),
    path: ROUTING_PATHES.CV,
    label: 'CV',
    available: false,
    icon: CV,
    isDisabled: false,
  },
  {
    id: uuidv4(),
    path: ROUTING_PATHES.WORKS,
    label: 'Works',
    available: true,
    icon: Works,
    isDisabled: false,
  },
  {
    id: uuidv4(),
    path: ROUTING_PATHES.BLOG,
    label: 'Blog',
    available: true,
    icon: Blog,
    isDisabled: false,
  },
  {
    id: uuidv4(),
    path: ROUTING_PATHES.CONTACTS,
    label: 'Contacts',
    available: true,
    icon: Contacts,
    isDisabled: false,
  },
];