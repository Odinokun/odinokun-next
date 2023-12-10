import { v4 as uuidv4 } from 'uuid';
import { HomeIcon, CvIcon, WorksIcon, BlogIcon, ContactsIcon } from '@/static/icons';
import { IconType } from 'react-icons';

interface RoutType {
  id: string;
  path: string;
  label: string;
  isAvailable: boolean;
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
    isAvailable: true,
    icon: HomeIcon,
    isDisabled: false,
  },
  {
    id: uuidv4(),
    path: ROUTING_PATHES.CV,
    label: 'CV',
    isAvailable: true,
    icon: CvIcon,
    isDisabled: false,
  },
  {
    id: uuidv4(),
    path: ROUTING_PATHES.WORKS,
    label: 'Works',
    isAvailable: true,
    icon: WorksIcon,
    isDisabled: false,
  },
  {
    id: uuidv4(),
    path: ROUTING_PATHES.BLOG,
    label: 'Blog',
    isAvailable: true,
    icon: BlogIcon,
    isDisabled: false,
  },
  {
    id: uuidv4(),
    path: ROUTING_PATHES.CONTACTS,
    label: 'Contacts',
    isAvailable: true,
    icon: ContactsIcon,
    isDisabled: false,
  },
];