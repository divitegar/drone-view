import React from "react";

export default function Benefit() {
  return (
    <div className="bg-primary-light h-[791px]">
      <div className="grid justify-center items-center">
        <h4 className="mt-32 text-4xl font-bold text-center">
          Why Drone Light?
        </h4>
        <h5 className="text-gray-500 mt-8 mx-96 leading-10 text-2xl text-center">
          We provide a best self drone easy to use and operate. With auto pilot,
          the device will take a beautiful view for the best of flying
          operation.
        </h5>
        <div className="flex justify-between items-center mt-[60px] mx-[361px]">
          <div className="grid gap-3">
            <h5 className="text-4xl font-bold text-center">4K</h5>
            <h5 className="text-gray-500 text-center">Camera Resolution</h5>
          </div>
          <div className="grid gap-3">
            <h5 className="text-4xl font-bold text-center">2 TB</h5>
            <h5 className="text-gray-500 text-center">Storage Capacity</h5>
          </div>
          <div className="grid gap-3">
            <h5 className="text-4xl font-bold text-center">60 m/s</h5>
            <h5 className="text-gray-500 text-center">Super Max Speed</h5>
          </div>
          <div className="grid gap-3">
            <h5 className="text-4xl font-bold text-center">30 mins</h5>
            <h5 className="text-gray-500 text-center">Long Flight Time</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
