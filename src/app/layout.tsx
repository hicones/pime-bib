import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { MobileHeader } from "@/components/Header/MobileHeader";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Cursor } from "@/components/Cursor";
import { VariantProvider } from "@/contexts/VariantContext";

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
      <head>
        <link rel="icon" href="/paulistinho.svg" sizes="any" />
        <link
          href="https://fonts.cdnfonts.com/css/general-sans"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/cabinet-grotesk"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/neutral-face"
          rel="stylesheet"
        />
        <link href="https://fonts.cdnfonts.com/css/inter" rel="stylesheet" />
        <link
          href="https://fonts.cdnfonts.com/css/montserrat"
          rel="stylesheet"
        />
      </head>
      <body>
        <VariantProvider>
          <Header />
          <MobileHeader />
          {children}
          <Cursor />
          <ToastContainer position="top-center" />
        </VariantProvider>
      </body>
    </html>
  );
}
