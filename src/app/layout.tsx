import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { MobileHeader } from "@/components/Header/MobileHeader";
import { Footer } from "@/components/Footer";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

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
      <link rel="icon" href="/paulistinho.svg" sizes="any" />
      <body className={generalSans.className}>
        <Header />
        <MobileHeader />
        {children}
        <ToastContainer position="top-center" />
      </body>
    </html>
  );
}
