import React from "react";

export default function Introduction() {
  return (
    <div className="w-full flex">
      <div className="w-1/2 relative">
        <img src="/images/bg-content-1.png" alt="bg-content" />
        <div className="absolute inset-0 flex justify-center items-center bg-black opacity-20 h-[710px]"></div>
        <div className="absolute inset-0 grid justify-center items-center h-1/2 mt-7 mx-auto">
          <h2 className="text-white text-4xl font-bold text-center">
            Ultra Light
          </h2>
          <h3 className="text-[28px] text-center w-[429px] text-white font-normal">
            Drone move faster with weighing component{" "}
            <span className="font-bold">under 200 g </span>
          </h3>
        </div>
      </div>
      <div className="w-1/2 relative">
        <img src="/images/bg-content-2.png" alt="bg-content" />
        <div className="absolute inset-0 flex justify-center items-center bg-black opacity-20 h-[710px]"></div>
        <div className="absolute inset-0 grid justify-center items-center h-1/2 mt-7 mx-auto">
          <h2 className="text-white text-4xl font-bold text-center">
            Best Resolution
          </h2>
          <h3 className="text-[28px] text-center w-[429px] text-white font-normal">
            Take a beautiful view with best camera up to
            <span className="font-bold"> 4K Camera Resolution </span>
          </h3>
        </div>
      </div>
    </div>
  );
}
