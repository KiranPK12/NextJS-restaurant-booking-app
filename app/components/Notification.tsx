import Image from "next/image";
import React from "react";

const Notification = () => {
  return (
    <div className="h-12 bg-red-500 text-white px-4 flex items-center justify-center text-center text-sm md:text-base cursor-pointer">
      Free Delivery for all orders over 499. Order your Food now!
      <div className=" hidden items-center gap-2 cursor-pointer bg-orange-300 p-2 rounded-md ml-4 md:flex lg:hidden">
        <Image src="/phone.png" alt="Phone" width={20} height={20} />
        <span className="text-white">044 272 39315</span>
      </div>
    </div>
  );
};

export default Notification;
