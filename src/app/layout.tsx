import type { Metadata } from 'next';
import { Kaushan_Script, Oswald, Roboto_Condensed, Teko } from 'next/font/google';

import { Aside } from '@/common/components/Aside/Aside';

import './globals.scss';

const kaushanScript = Kaushan_Script({ subsets: ['latin'], weight: '400', variable: '--font-kaushan' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });
const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-roboto',
});
const teko = Teko({ subsets: ['latin'], variable: '--font-teko' });

export const metadata: Metadata = {
  metadataBase: new URL('https://odinokun.com/'),
  title: {
    template: '%s | Dima Hordiienko',
    default: 'Dima Hordiienko - front-end developer',
  },
  description: 'Dima Hordiienko - front-end developer',
  openGraph: {
    siteName: 'Dima Hordiienko',
    url: 'https://odinokun.com/',
    title: {
      template: '%s | Dima Hordiienko',
      default: 'Dima Hordiienko - front-end developer',
    },
    description: 'Dima Hordiienko - front-end developer',
    images: [
      {
        url: '/og-image.png',
        width: 1201,
        height: 627,
        alt: 'Dima Hordiienko - front-end developer',
      },
      {
        url: '/android-chrome-192x192.png',
        width: 600,
        height: 600,
      },
      {
        url: '/android-chrome-192x192.png',
        width: 1600,
        height: 1600,
        alt: 'Dima Hordiienko - front-end developer',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  icons: {
    icon: '/favicon-32x32.png',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon.png',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`
        ${kaushanScript.variable}
        ${oswald.variable}
        ${robotoCondensed.variable}
        ${teko.variable}`}
    >
    <body>
    <Aside />
    <main>
      {children}
    </main>
    </body>
    </html>
  );
}
