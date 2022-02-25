import React from "react";

export default function Product() {
  return (
    <>
      <div className="-mt-56 flex justify-center">
        <img
          src="/images/hero-content.png"
          className="w-[468px] h-[476px]"
          alt="product"
        />
      </div>
      <div className="flex justify-center my-20">
        <h5 className="text-4xl font-bold text-center">
          4K video shot on our <br /> Drone Light
        </h5>
      </div>
      <div className="flex justify-center">
        <iframe
          width="1170"
          height="658"
          className="rounded-xl"
          src="https://www.youtube.com/embed/HSsqzzuGTPo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="grid grid-cols-1 justify-center items-center my-20">
        <h5 className="text-4xl font-bold text-center">New Products</h5>
        <h5 className="text-xl text-gray-500 text-center">
          New innovation, best quality than before. <br /> make every moment
          flying operation become unforgettable.
        </h5>
      </div>
      <div className="grid grid-cols-3 gap-5 mx-10">
        <div className="border-2 rounded-[20px] text-center border-primary-light p-8">
          <img
            src="/images/content-1.jpg"
            className="w-[410px] h-[240px]"
            alt="content-1"
          />
          <h2 className="text-[30px] font-medium mt-5">Mini Drone</h2>
          <h2 className="text-[32px] font-bold">Rp18.755.000</h2>
          <h3 className="text-gray-500">
            Powerful camera drone at an affordable price range. Camera up to 4K
            resolution, optimize shots automatically.
          </h3>
        </div>
        <div className="border-2 rounded-[20px] text-center border-primary-light p-8">
          <img
            src="/images/content-2.jpg"
            className="w-[410px] h-[240px]"
            alt="content-2"
          />
          <h2 className="text-[30px] font-medium mt-5">Drone Light</h2>
          <h2 className="text-[32px] font-bold">Rp23.086.000</h2>
          <h3 className="text-gray-500">
            Drone light is every creators dream. Setting apperture manually and
            high baterry performance. Drone light is everything you need.
          </h3>
        </div>
        <div className="border-2 rounded-[20px] border-primary-light p-8 text-center">
          <img
            src="/images/content-3.jpg"
            className="w-[410px] h-[240px] rounded-[20px]"
            alt="content-3"
          />
          <h2 className="text-[30px] font-medium mt-5">Phantom Drone</h2>
          <h2 className="text-[32px] font-bold">Rp8.640.000</h2>
          <h3 className="text-gray-500">
            Inspired by phantom, drone can move faster and quickly like a ghost.
            Focus on speed so you can investigate environtment quickly.
          </h3>
        </div>
      </div>
    </>
  );
}
