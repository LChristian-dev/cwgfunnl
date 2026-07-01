import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "../styles/main.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CWGFunnl — Done-For-You Sales Funnels for Coaches",
  description: "High-converting sales funnels built and deployed in 10–20 business days. For coaches, educators, and online experts serious about scaling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
