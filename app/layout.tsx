import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ErrorBoundary } from "../components/ErrorBoundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DeApe.fi - Coming Soon",
  description: "Revolutionizing NFT finance on the Ape blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} bg-gray-900`}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
