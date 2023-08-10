import Image from "next/image";
import React from "react";
import { featuredProducts } from "../data";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-scroll text-red-500 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']" >
      {/* wrapper */}
      <div className="w-max flex  ">
        {featuredProducts.map((product) => (
          <div
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 pt-10 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]" 
            key={product.id}
          >
            <div className="relative flex-1 w-full hover:rotate-[90deg] transition-all duration-500">
              <Image
                src={product.img}
                alt="Food Image"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-1 flex-col text-center items-center justify-between mb-6 gap-3">
              <h1 className="text-xl uppercase font-bold pt-6 xl:text-2xl 2xl:text-3xl">
                {product.title}
              </h1>
              <p className="px-4 2xl:px-8">{product.desc}</p>
              <span className="text-xl font-bold">$ {product.price}</span>
              <button className="bg-red-500 text-white p-2 rounded-md">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
