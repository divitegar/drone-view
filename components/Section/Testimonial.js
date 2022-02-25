import React from "react";

export default function Testimonial() {
  return (
    <div className="bg-primary-light h-[759px]">
      <div className="mx-[135px]">
        <h3 className="text-[64px] font-bold pt-[115px]">
          What Our “Pilots” <br /> Are Saying
        </h3>
        <div className="grid grid-cols-3 gap-5 mt-20">
          <div className="border-2 border-primary-light bg-white rounded-xl p-10">
            <h2 className="text-base">
              “With high resolution camera, picture become clear and beautiful.
              It’s so easy to operate drone.”
            </h2>
            <div className="flex mt-10">
              <img
                src="/images/profile-2.png"
                className="w-[70px] h-[70px] mr-5"
                alt="profile"
              />
              <div className="grid grid-cols-1">
                <h2 className="font-bold text-[20px]">Lucas Walker</h2>
                <h2 className="text-lg text-gray-500">Content Creator</h2>
              </div>
            </div>
          </div>
          <div className="border-2 border-primary-light bg-white rounded-xl p-10">
            <h2 className="text-base">
              “Taking high view video become easy and faster. Battery perfomance
              really helping for making film.”
            </h2>
            <div className="flex mt-10">
              <img
                src="/images/profile-1.png"
                className="w-[70px] h-[70px] mr-5"
                alt="profile"
              />
              <div className="grid grid-cols-1">
                <h2 className="font-bold text-[20px]">Jessica Obrien</h2>
                <h2 className="text-lg text-gray-500">Director Film </h2>
              </div>
            </div>
          </div>
          <div className="border-2 border-primary-light bg-white rounded-xl p-10">
            <h2 className="text-base">
              “Making video content for my trip vlog so powerful and wonderful.
              Love the video quality.”
            </h2>
            <div className="flex mt-10">
              <img
                src="/images/profile-3.png"
                className="w-[70px] h-[70px] mr-5"
                alt="profile"
              />
              <div className="grid grid-cols-1">
                <h2 className="font-bold text-[20px]">Lisa Miller</h2>
                <h2 className="text-lg text-gray-500">Content WQCreator</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
