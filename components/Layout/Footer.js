import React from "react";

import Facebook from "/public/images/social-facebook.svg";
import Instagram from "/public/images/social-instagram.svg";
import Twitter from "/public/images/social-twitter.svg";
import Youtube from "/public/images/social-youtube.svg";

export default function Footer() {
  return (
    <footer>
      <div className="bg-primary-dark w-screen relative h-[410px]">
        <div className="grid absolute inset-0 grid-cols-5 justify-center mt-[110px] gap-5 mx-[144px]">
          <div className="col-span-2">
            <div className="grid grid-cols-1 gap-3">
              <div className="flex gap-4 items-center">
                <img
                  src="/images/logo-transparent.png"
                  className="w-[68px] h-[32px]"
                  alt="logo"
                />
                <h2 className="text-white font-bold text-[26px]">
                  DroneshopID
                </h2>
              </div>

              <h2 className="text-white text-lg mt-3">
                Look up the sky and beautiful world easily.
              </h2>
              <div className="flex gap-3">
                <Facebook />
                <Instagram />
                <Twitter />
                <Youtube />
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-white font-bold text-lg">Explore</h2>
            <div className="grid grid-rows-4 gap-3 mt-10">
              <h2 className="font-light text-lg text-white">Our Services</h2>
              <h2 className="font-light text-lg text-white">Specification</h2>
              <h2 className="font-light text-lg text-white">Refund</h2>
              <h2 className="font-light text-lg text-white">Pricelist</h2>
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-white font-bold text-lg">Account</h2>
            <div className="grid grid-rows-4 gap-3 mt-10">
              <h2 className="font-light text-lg text-white">My Account</h2>
              <h2 className="font-light text-lg text-white">Top Benefit</h2>
              <h2 className="font-light text-lg text-white">
                How-to Tutorials
              </h2>
              <h2 className="font-light text-lg text-white">Moment</h2>
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="text-white font-bold text-lg">Office</h2>
            <div className="grid grid-rows-4 gap-3 mt-10">
              <h2 className="font-light text-lg text-white">+022 123 4567</h2>
              <h2 className="font-light text-lg text-white">
                Bandung, Indonesia
              </h2>
              <h2 className="font-light text-lg text-white">
                No. 2 (Autodrone)
              </h2>
              <h2 className="font-light text-lg text-white">
                support@autodrone.id
              </h2>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
