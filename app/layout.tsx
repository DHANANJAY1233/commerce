import Navbar from 'components/layout/navbar';
import { ensureStartsWith } from 'lib/utils';
import { Bree_Serif, Open_Sans, Work_Sans } from 'next/font/google';
import { ReactNode, Suspense } from 'react';
import './globals.css';

const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite
      }
    })
};

const inter = Open_Sans({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

const bree = Bree_Serif({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bree'
});

const work = Work_Sans({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work'
});

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bree.variable} ${work.variable}`}>
      <body className="bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <Navbar siteName={SITE_NAME} />
        <Suspense>
          <main>{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
