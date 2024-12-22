import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TAMU Formula Electric",
  description: "The website for Texas A&M Formula Electric.",
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
