"use client";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import ScrollToTop from "@/src/components/ScrollToTop";
import { Raleway } from "next/font/google";
import "../app/globals.css";
import { Providers } from "./providers";
import ScrollUp from "@/src/components/common/ScrollUp";
import About from "@/src/pages/About";

const inter = Raleway({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />

      <body className={`bg-[#FCFCFC] ${inter.className}`}>
        <Providers>
          <Header />

          {/* <ScrollUp /> */}
          {children}
          <Footer />
        </Providers>

        <ScrollToTop />
      </body>
    </html>
  );
}
