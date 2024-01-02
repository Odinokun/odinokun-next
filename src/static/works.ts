import { v1 } from 'uuid';

interface IWorks {
  id: string;
  img: string;
  title: string;
  date: string;
  link: string;
  technologies: string[];
}

export const works: IWorks[] = [
  {
    id: v1(),
    img: '/works/profilance.jpg',
    title: 'Profilance',
    date: 'November 2023',
    link: 'https://profilance.ch/',
    technologies: [
      'Pug',
      'Scss',
      'JS + Jquery',
    ],
  },
  {
    id: v1(),
    img: '/works/metame.jpg',
    title: 'Metame',
    date: '2022 - 2023',
    link: 'https://www.metamenft.io/',
    technologies: [
      'React.js',
      'Next.js',
      'TypeScript',
      'GSAP',
      'Tailwind CSS',
    ],
  },
  {
    id: v1(),
    img: '/works/4-deluxe.jpg',
    title: '4-Deluxe',
    date: 'June 2018',
    link: 'https://4deluxe-whirlpool.de/',
    technologies: [
      'Pug + BEM',
      'Scss',
      'JavaScript',
    ],
  },
  {
    id: v1(),
    img: '/works/rockland.jpg',
    title: 'Rockland',
    date: 'November 2020',
    link: 'https://rocklandbeauty.com/',
    technologies: [
      'Pug + BEM',
      'Scss',
      'JS + Jquery',
      'Animate.css',
    ],
  },
  // {
  //   id: v1(),
  //   img: '/works/adapwork.jpg',
  //   title: 'Adapwork',
  //   date: 'January 2024',
  //   link: 'https://adapwork.com/',
  //   technologies: [
  //     'Pug + BEM',
  //     'Scss',
  //     'JS + Jquery',
  //     'GSAP',
  //   ],
  // },
];
  
