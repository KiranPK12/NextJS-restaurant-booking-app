import Image from "next/image";
import React from "react";
import UrgeWithPleasureComponent from "./CountDownTimer";
import CountDown from "./CountDownTimer";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* text container */}
      <div className="flex-1 flex flex-col items-center justify-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Delicious Burger & French Fry
        </h1>
        <p className="text-white text-lg px-8">
          {" "}
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <button className="bg-red-500 text-white rounded-md py-3 px-6 text-base">
          Order Now
        </button>
        <span className="font-bold text-5xl text-yellow-300">
          Offer Ends Soon
    </span>
      </div>
      {/* image container */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
