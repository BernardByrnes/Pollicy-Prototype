import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pollicy — Research. Policy. Data. People.',
  description:
    'Pollicy is a Pan-African feminist technology, data, and policy organization building rights-respecting data ecosystems across Africa.',
  keywords: 'Pollicy, Africa, data governance, feminist technology, policy research, civic space',
  openGraph: {
    title: 'Pollicy — Research. Policy. Data. People.',
    description: 'Building rights-respecting data ecosystems across Africa.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
