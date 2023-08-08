"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const Links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = true;
  return (
    <div>
      {!isOpen ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setIsOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setIsOpen(false)}
        />
      )}
      {isOpen && <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6.5rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
        {Links.map((item) => (
          <Link href={item.url} key={item.id} onClick={()=>setIsOpen(false)}>
            {item.title}
          </Link>
        ))}
        {!user ? (
          <Link href="/login" onClick={()=>setIsOpen(false)}>Login</Link>
        ) : (
          <Link href="/orders" onClick={()=>setIsOpen(false)}>Orders</Link>
        )}
        <CartIcon  />
      </div>}
    </div>
  );
};

export default Menu;
