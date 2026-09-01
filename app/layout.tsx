import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Vellum Frame | Adaptation Studio',
    template: '%s | Vellum Frame',
  },
  description:
    'Language adaptation, production readiness, and launch direction for illustrated and interactive stories moving into English.',
  openGraph: {
    title: 'Vellum Frame | Adaptation Studio',
    description:
      'A distinct creative localization and story production studio concept for global entertainment releases.',
    images: ['/editorial-studio-hero.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
