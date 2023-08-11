import Image from "next/image";
import React from "react";
import { CiSquareRemove } from "react-icons/ci";

const CartPage = () => {
  return (
    <div className="h-screen md:h-[calc(100vh - 11rem)] flex flex-col text-red-500 lg:flex-row  ">
      <div className="h-1/2 p-4 flex flex-col justify-center gap-4 overflow-y-scroll lg:h-full lg:w-2/3 xl:w-1/2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] lg:px-20 xl:px-40  ">
        <div className="flex items-center justify-between mb-4 mt-[20rem] lg:mt-[20rem]">
          <Image src="/temporary/p1.png" alt="" height={100} width={100} />
          <div>
            <h1 className="uppercase text-xl font-bold">Sicilan</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$ 79.20</h2>
          <span className="cursor-pointer">
            <CiSquareRemove size={24} />
          </span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" height={100} width={100} />
          <div>
            <h1 className="uppercase text-xl font-bold">Sicilan</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$ 79.20</h2>
          <span className="cursor-pointer">
            <CiSquareRemove size={24} />
          </span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" height={100} width={100} />
          <div>
            <h1 className="uppercase text-xl font-bold">Sicilan</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$ 79.20</h2>
          <span className="cursor-pointer">
            <CiSquareRemove size={24} />
          </span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" height={100} width={100} />
          <div>
            <h1 className="uppercase text-xl font-bold">Sicilan</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$ 79.20</h2>
          <span className="cursor-pointer">
            <CiSquareRemove size={24} />
          </span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" height={100} width={100} />
          <div>
            <h1 className="uppercase text-xl font-bold">Sicilan</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">$ 79.20</h2>
          <span className="cursor-pointer">
            <CiSquareRemove size={24} />
          </span>
        </div>
     
      </div>
      <div className="h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 xl:w-1/2 ">
        <div className="flex justify-between">
          <span className="">Subtotal ( 3 items)</span>
          <span>$ 79.20</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span>$ 79.20</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-400">FREE</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL (INCL. TAX)</span>
          <span className="font-bold">$ 23.22</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
