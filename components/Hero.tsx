"use client";
import React from "react";

function Hero() {
  return (
    <div>
      <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
        <div className="absolute top-20 left-0 h-[95vh] w-screen ">
          <div className="slide">
            <div
              style={{ backgroundImage: "url(/assets/20201231_130436.jpg)" }}
            ></div>
            <div
              style={{ backgroundImage: "url(/assets/iStock-1195604133.jpg)" }}
            ></div>
            <div
              style={{ backgroundImage: "url(/assets/iStock-1222813488.jpg)" }}
            ></div>
            <div
              style={{ backgroundImage: "url(/assets/main_img_04.jpg)" }}
            ></div>
            <div
              style={{ backgroundImage: "url(/assets/main_img_05.jpg)" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
