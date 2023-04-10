import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="max-w-[90%] md:max-w-7xl mx-auto">
      <div className="md:flex justify-between border-t-2 border-b-2 border-b-gray-100 border-t-gray-100 py-12">
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={100}
              height={100}
              className="h-8 w-8"
            />
            <div className="text-secondary text-xl font-medium">Hourglass</div>
          </div>
          <div className="my-12 md:my-6 flex md:space-x-4 space-x-32">
            <ul className="flex flex-col md:flex-row md:space-x-4 font-normal text-offblack">
              <li>Overview</li>
              <li>Features</li>
              <li>Pricing</li>
            </ul>
            <ul className="flex flex-col md:flex-row md:space-x-4 font-normal text-offblack">
              <li>Careers</li>
              <li>Help</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
        <div className="min-w-[30%]">
          <div className="text-sm">Stay up to date</div>
          <div className="mt-4 flex flex-col md:flex-row gap-4">
            <input
              className="border border-gray-300 rounded-lg p-1 flex-1"
              type="text"
              placeholder="Enter your email"
            />
            <button className="bg-secondary p-2 rounded-md px-4 text-md text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row justify-between my-10 font-thin text-offblack">
        <div>© 2077 Fake Company. All rights reserved.</div>
        <div>
          <ul className="flex space-x-4 items-center mb-6 md:mb-0">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
