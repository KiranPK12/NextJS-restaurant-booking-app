import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-20 p-4 text-red-500 flex items-center justify-between md:px-10 lg:px-20 xl:px-40">
      <Link href={"/"} className="font-bold">MASSIMO</Link>
      <p>©️ All Rights Reserved</p>
    </div>
  );
};

export default Footer;
