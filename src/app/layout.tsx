import type { Metadata } from "next";
import "./globals.css";

// Define base URL as a constant - easy to change when moving to production
const BASE_URL = 'https://fsae-ev-site-six.vercel.app';

export const metadata: Metadata = {
  title: "TAMU Formula Electric",
  description: "The official website for Texas A&M Formula Electric.",
  metadataBase: new URL(BASE_URL),
  appleWebApp: {
    title: "TAMU FE",
    capable: true,
    statusBarStyle: "default",
    startupImage: [
      '/apple-icon.png'
    ]
  },
  keywords: ['Formula Electric', 'Texas A&M', 'TAMU', 'Electric Racing', 'FSAE', 'Formula Student', 'Engineering', 'Student Organization', 'Student Orgs', 'SAE', 'Electric Vehicles', 'EVs', 'Electric Cars', 'EV Racing', 'Electric Racing Cars', 'Electric'],
  authors: [{ name: 'Texas A&M Formula Electric' }],
  category: 'Engineering',
  openGraph: {
    title: 'Texas A&M Formula Electric',
    description: 'The official website for Texas A&M Formula Electric.',
    url: BASE_URL,
    siteName: 'Texas A&M Formula Electric',
    images: [
      {
        url: `${BASE_URL}/icon.png`,
        width: 1200,
        height: 630,
        alt: 'Texas A&M Formula Electric',
        type: 'image/png'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Texas A&M Formula Electric',
    card: 'summary_large_image',
    images: [`${BASE_URL}/icon.png`],
    description: 'The official website for Texas A&M Formula Electric.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    shortcut: [
      { url: '/favicon.ico' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/icon.svg',
        color: '#490905'
      },
      {
        rel: 'apple-touch-icon',
        url: '/apple-icon.png'
      }
    ]
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}