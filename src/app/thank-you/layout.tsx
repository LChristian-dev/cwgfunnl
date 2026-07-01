import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'You\'re Booked! — CWGFunnl',
  description: 'Done-for-you funnel builds that fill your calendar and close more clients. Built for coaches and creators who are serious about growth.',
  metadataBase: new URL('https://cwgfunnl.com'),
  openGraph: {
    title: 'High-Converting Funnels for Coaches & Creators — CWGFunnl',
    description: 'Done-for-you funnel builds that fill your calendar and close more clients. Delivered in 10–20 business days, fully integrated.',
    url: 'https://cwgfunnl.com',
    siteName: 'CWGFunnl',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'CWGFunnl — High-Converting Funnels for Coaches & Creators',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'High-Converting Funnels for Coaches & Creators — CWGFunnl',
    description: 'Done-for-you funnel builds that fill your calendar and close more clients. Delivered in 10–20 business days, fully integrated.',
    images: ['/og-image.svg'],
  },
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
