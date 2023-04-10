import React from "react";
import Image from "next/image";
import { PlayCircleIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <div className="md:py-16 py-4">
      <div className="">
        <div className="text-4xl md:text-6xl md:leading-[60px] text-white md:max-w-[80%]">
          We design physical <span className="underline">experiences</span> that
          create more happy in the world
        </div>
        <div className="text-tertiary md:max-w-[40%] my-6 text-base">
          — We’re a full-service interior design agency who specialise in
          simple, useful and beautiful solutions for any space.
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-4 my-6">
          <button className="bg-white p-6 py-3 flex justify-center gap-2 rounded-md min-w-[172px] items-center text-quaternary text-md">
            <PlayCircleIcon className="h-6 w-6" />
            Showreel
          </button>
          <button className="bg-secondary p-6 py-3 rounded-md min-w-[172px] text-white">
            Get in touch
          </button>
        </div>
      </div>
      <div className="my-6">
        <Image
          src={"/assets/hero-image.jpg"}
          alt="hero image"
          className="w-full h-full"
          width={"1216"}
          height={"516"}
        />
      </div>
      <div className="mt-6 md:mt-24">
        <div className="text-center text-tertiary">
          We’ve worked with some great startups
        </div>
        <div className="flex md:items-center md:justify-between flex-wrap justify-center my-6 gap-4 md:gap-0">
          <Image
            src={"/assets/company-logo-layer.png"}
            alt="layer"
            className="w-40"
            width={"146"}
            height={"48"}
          />
          <Image
            src={"/assets/company-logo-sisyphus.png"}
            alt="layer"
            className="w-40"
            width={"146"}
            height={"48"}
          />
          <Image
            src={"/assets/company-logo-circooles.png"}
            alt="layer"
            className="w-40"
            width={"146"}
            height={"48"}
          />
          <Image
            src={"/assets/company-logo-catalog.png"}
            alt="layer"
            className="w-40"
            width={"146"}
            height={"48"}
          />
          <Image
            src={"/assets/company-logo-quotient.png"}
            alt="layer"
            className="w-40"
            width={"146"}
            height={"48"}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
