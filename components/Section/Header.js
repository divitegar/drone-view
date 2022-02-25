import React from "react";
import Button from "../Utils/Button";

import IconTag from "/public/images/icon-tag.svg";

export default function Header() {
  return (
    <div className="bg-primary-light -mt-[146px] w-screen z-10 h-screen">
      <div className="pt-[250px] pl-[135px]">
        <div className="grid grid-cols-2 justify-end">
          <div className="grid justify-between">
            <div className="bg-primary-pink-100 w-[219px] h-[36px] flex items-center justify-between p-5 rounded-[41px]">
              <IconTag />
              <h3 className="text-red-300 font-bold">Get 25% discount</h3>
            </div>
            <h3 className="text-primary-dark text-[66px] font-bold leading-[68px]">
              Representing <br /> Drone Light
            </h3>
            <h3 className="text-gray-500 my-6">
              Look up the sky and beautiful world with simple navigation. Just
              record and get a lot memories to share, lightly and fast like a
              lightning.
            </h3>
            <Button
              text="Get Now"
              className="bg-primary-blue text-white w-[173px] h-[63px] text-lg"
            />
          </div>
          <div>
            <img src="/images/hero-header.png" alt="hero header" />
          </div>
        </div>
      </div>
    </div>
  );
}
