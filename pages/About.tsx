import Header from "@/components/Header";
import React from "react";
import "../app/globals.css";

export default function About() {
  return (
    <div>
      <Header />
      <section className="relative py-24 px-4">
        <div className="z-20 relative text-white container mx-auto">
          <p className=" font-bold text-4xl">About Us</p>
        </div>
        <div className="absolute inset-0 h-full z-10">
          <img
            src="..\assets\new_image_1.jpg"
            alt=""
            className="h-full w-full object-fit-cover"
          />
        </div>
      </section>
    </div>
  );
}
