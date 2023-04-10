import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="bg-offwhite py-12 pb-32">
        <div className="max-w-[90%] md:max-w-7xl mx-auto md:flex justify-between gap-40">
          <div>
            <div className="text-quaternary font-semibold mb-3">Who we are</div>
            <div className="mb-6 md:mb-0">
              <div className="font-semibold text-3xl mb-5">
                Commercial interior designers
              </div>
              <div className="font-thin text-offblack">
                Untitled are a commercial interior design studio. We specialise
                in customised office design, restaurant design, shop design, and
                studio design.
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-5 items-start mb-12">
              <div className="bg-quinary flex items-center justify-center w-12 p-3 rounded-full">
                <Image
                  src="/assets/message-chat-circle.svg"
                  alt="message"
                  height={40}
                  width={40}
                />
              </div>
              <div>
                <div className="font-medium mt-3">Share team inboxes</div>
                <div className="font-thin text-offblack mt-3">
                  Whether you have a team of 2 or 200, our shared team inboxes
                  keep everyone on the same page and in the loop.
                </div>
              </div>
            </div>
            <div className="flex gap-5 items-start">
              <div className="bg-quinary flex items-center justify-center w-12 p-3 rounded-full">
                <Image
                  src="/assets/zap.svg"
                  alt="message"
                  height={40}
                  width={40}
                />
              </div>
              <div>
                <div className="font-medium mt-3">Deliver instant answers</div>
                <div className="font-thin text-offblack mt-3">
                  An all-in-one customer service platform that helps you balance
                  everything your customers need to be happy.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[90%] md:max-w-7xl mx-auto">
        <Image
          src="/assets/about-image.png"
          width={"1216"}
          height={"516"}
          alt="About Image"
          className="w-full mt-[-80px] mb-20"
        />
      </div>
    </div>
  );
};

export default About;
