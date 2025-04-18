import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/app/providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gelato EIP 7702 Demo",
  description: "Gelato EIP 7702 Demo ",
  openGraph: {
    title: "Gelato EIP 7702 Demo",
    description: "Gelato EIP 7702 Demo ",
    images: [
      "https://cdn.prod.website-files.com/672e31b60a8c3f5e53aced2d/673cc864ff13c827dfd59a02_ABC-OG%20Image-min%202.png",
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
