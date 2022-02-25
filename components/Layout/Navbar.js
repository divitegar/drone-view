import Image from "next/image";
import React from "react";
import Button from "../Utils/Button";

export default function Navbar() {
  const menuNavbar = ["Home", "Gallery", "Products", "Review", "Support"];
  return (
    <navbar>
      <div className="w-full px-[135px] py-[45px] bg-transparent">
        <div className="flex justify-between items-center">
          <div className="flex">
            <Image src="/images/logo.png" width={59} height={27} alt="logo" />
            <h2 className="text-primary-dark text-lg ml-2">DroneshopID</h2>
          </div>
          <div className="w-1/2 mx-2">
            <div className="flex justify-between">
              {menuNavbar.map((item, index) => {
                return (
                  <h2 key={index} className="text-primary-dark text-lg">
                    {item}
                  </h2>
                );
              })}
            </div>
          </div>
          <div className="w-[270px]">
            <div className="flex justify-end items-center">
              <h2 className="text-primary-blue mr-10 text-lg font-medium">
                Sign In
              </h2>
              <Button
                text="Register"
                className="bg-primary-blue text-white py-4 px-8"
              />
            </div>
          </div>
        </div>
      </div>
    </navbar>
  );
}
