import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const libreBaskerville = Libre_Baskerville({ 
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-libre-baskerville"
});

const sourceSans = Source_Sans_3({ 
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-source-sans"
});

export const metadata: Metadata = {
  title: "Nordic Algerens - Din professionelle alge- og rengøringspartner",
  description: "Professionel algebehandling, fliserens, tagrenderens og edderkoppebekæmpelse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body className={`${sourceSans.variable} ${libreBaskerville.variable} font-sans`}>{children}</body>
    </html>
  );
}
