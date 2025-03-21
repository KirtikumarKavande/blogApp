// app/layout.jsx
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js Blog Platform',
  description: 'A modern blog platform built with Next.js 14',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}