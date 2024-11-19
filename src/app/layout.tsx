import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Blog',
  description: 'A simple blog built with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <header className="bg-black text-white p-4">
          <nav className="max-w-7xl mx-auto">
            <Link href="/" className="text-2xl font-bold">
              My Blog
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
