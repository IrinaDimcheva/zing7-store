import type { Metadata } from 'next';
import './globals.css';
import { roboto } from './fonts';
import Header from '@/components/layout/header';

export const metadata: Metadata = {
  title: 'Store',
  description: 'Your online store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
