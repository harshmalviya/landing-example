import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="md:flex md:justify-between text-white p-1 py-4 md:p-4 md:items-center">
      <div className="flex md:items-center md:gap-10 justify-between relative">
        <div className="flex gap-2 items-center text-lg font-bold">
          <Image
            src="/assets/logo.png"
            alt="logo"
            className="h-8 w-7"
            height={20}
            width={20}
          />
          <div>Hourglass</div>
        </div>
        <div className="md:hidden" onClick={() => setIsOpen((prev) => !prev)}>
          <Bars3Icon className="h-10 w-10" />
        </div>
        <div
          className={`md:block ${
            isOpen
              ? "block absolute bg-secondary text-white w-full top-10 left-0"
              : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 md:items-center">
            <li className="py-2 md:py-0">Home</li>
            <li className="py-2 md:py-0">Products</li>
            <li className="py-2 md:py-0">Resources</li>
          </ul>
        </div>
      </div>
      <div className="hidden md:flex gap-5">
        <button>Support</button>
        <button className="bg-secondary p-4 py-1 rounded-lg text-md">
          Talk to sales
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
