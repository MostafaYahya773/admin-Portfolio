import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import ReactQueryProvider from './_components/ReactQueryProvider/ReactQueryProvider';
import NavbarServer from './_components/Navbar/NavbarServer';
import { Toaster } from 'react-hot-toast';
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'portfolio admin',
  description: 'portfolio admin',
  icons: {
    icon: '/vercel.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable}`}>
      <body className="bg-bg-color">
        <header>
          <NavbarServer />
        </header>
        <main className="max-w-[1300px] mx-auto">
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
