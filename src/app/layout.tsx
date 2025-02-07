import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TAMU Formula Electric",
  description: "The official website for Texas A&M Formula Electric.",
  metadataBase: new URL('https://tamuformulaelectric.com'),
  appleWebApp: {
    title: "TAMU FE"
  },
  keywords: ['Formula Electric', 'Texas A&M', 'TAMU', 'Electric Racing', 'FSAE', 'Formula Student', 'Engineering', 'Student Organization', 'Student Orgs', 'SAE', 'Electric Vehicles', 'EVs', 'Electric Cars', 'EV Racing', 'Electric Racing Cars', 'Electric'],
  authors: [{ name: 'Texas A&M Formula Electric' }],
  category: 'Engineering',
  openGraph: {
    title: 'Texas A&M Formula Electric',
    description: 'The official website for TAMU Formula Electric.',
    url: 'https://tamuformulaelectric.com',
    siteName: 'Texas A&M Formula Electric',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'Texas A&M Formula Electric'
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
    images: ['/icon.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/icon.svg',
        color: '#490905'
      },
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
      <body>
        {children}
      </body>
    </html>
  );
}
