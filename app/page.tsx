import Hero from "@/src/components/Hero";
import ScrollUp from "@/src/components/common/ScrollUp";
import About from "@/src/pages/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NES Solar",
  description: "This is Home for Startup Next js Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
    </>
  );
}
