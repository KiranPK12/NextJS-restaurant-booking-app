import Price from "@/app/components/Price";
import { singleProduct } from "@/app/data";
import Image from "next/image";
import React from "react";

const SingleProductPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:h-[calc(100vh-8rem)] md:items-center">
      {/* image container */}
      <div className="relative w-full h-1/2 md:h-[70%]">
        <Image
          src={singleProduct.img}
          alt="Product Pic"
          fill
          className="object-contain"
        />
      </div>
      {/* text container */}
      <div className="h-1/2 flex flex-col gap-4 mt-5" >
        <h1 className="text-3xl font-bold uppercase xl:text-4xl">{singleProduct.title}</h1>
        <p className="font-medium text-md mb-2">{singleProduct.desc}</p>
        <Price
          price={singleProduct.price}
          id={singleProduct.id}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
};

export default SingleProductPage;
