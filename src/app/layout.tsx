import type { Metadata } from 'next';
import './globals.css';
import { roboto } from './fonts';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

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
      <body
        className={`${roboto.className} antialiased text-[16px] leading-[20px] `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
