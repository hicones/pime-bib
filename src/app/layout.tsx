import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { MobileHeader } from "@/components/Header/MobileHeader";

const generalSans = localFont({ src: "../fonts/GeneralSans.ttf" });

export const metadata: Metadata = {
  title: "BiB",
  description: "Bom i Barato",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <link rel="icon" href="/pime_logo.svg" sizes="any" />
      <body className={generalSans.className}>
        <Header />
        <MobileHeader />
        {children}
      </body>
    </html>
  );
}
