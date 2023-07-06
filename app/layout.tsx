import './globals.css';

import { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  AppProps,
  children,
}: {
  AppProps: AppProps;
  children: React.ReactNode;
}) {
  return (
    <SessionProvider session={AppProps.pageProps.session}>
      <html lang='en'>
        <body className={inter.className}>{children}</body>
      </html>
    </SessionProvider>
  );
}
