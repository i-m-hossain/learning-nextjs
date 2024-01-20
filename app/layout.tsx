import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import config from '@/config/config';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: config.websiteTitle,
  description: config.websiteDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`flex flex-col min-h-screen bg-gray-100 ${inter.className}`}
      >
        <Navbar />
        <div className='flex flex-1 overflow-hidden'>
          <Sidebar />
          <main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-950 p-4'>
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
