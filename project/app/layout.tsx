import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tricity Delta - Premium Residential Project in Navi Mumbai',
  description: 'Experience modern urban living at Tricity Delta, Navi Mumbai. Luxurious 1, 2 & 3 BHK apartments with top-tier amenities, seamless connectivity, and a vibrant lifestyle.',
  keywords: 'Tricity Delta, real estate, Navi Mumbai, premium apartments, residential project, luxury living, 1 BHK, 2 BHK, 3 BHK',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
