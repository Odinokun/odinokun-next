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
  title: 'Odinokun',
  description: 'Odinokun\'s personal website',
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
