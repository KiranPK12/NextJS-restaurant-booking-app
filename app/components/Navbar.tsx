import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 p-4 flex justify-between items-center border-b-[1px] border-b-red-500 uppercase md:h-20 md:text-center  ">
      {/* left links */}
      <div className="hidden md:flex gap-4 flex-1 md:justify-center">
        <Link href="/">Home page</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact Me</Link>
      </div>
      {/* center link */}
      <div className="text-xl font-semibold md:font-bold flex-1">
        <Link href="/">MASSIMO</Link>
      </div>
      <div className="md:hidden">
        <Menu />
      </div>
      {/* right links */}
      <div className="hidden md:flex items-center md:justify-center gap-4 flex-1 md:text-base">
        <div className=" items-center gap-2 cursor-pointer bg-orange-300 p-2 rounded-md md:hidden lg:flex ">
          <Image src="/phone.png" alt="Phone" width={20} height={20} />
          <span className="text-white">044 272 39315</span>
        </div>
        {!user ? <Link href="/">Login</Link> : <Link href="/menu">Orders</Link>}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
