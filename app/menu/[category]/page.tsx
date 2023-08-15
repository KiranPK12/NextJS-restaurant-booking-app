import { pizzas } from "@/app/data";
import { ProductType } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  params: { category: string };
};

const getData = async (category: string) => {
  const res = await fetch(
    `http://localhost:3000/api/products?cat=${category}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }
  return res.json();
};

const CategoryPage = async({ params }: Props) => {

  const products:ProductType[] = await getData(params.category)

  return (
    <div className="flex flex-wrap text-red-500">
      {products.map((item:ProductType) => (
        <Link
          href={`/product/${item.id}`}
          key={item.id}
          className="w-full h-[60vh] border-r-[1px] border-b-[1px] border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-fuchsia-50"
        >
          <div className="relative h-[80%]">
            {item.img && (
              <Image
                src={item.img}
                alt="Food pic"
                fill
                className="object-contain"
              />
            )}
          </div>
          <div className="flex items-center justify-between font-bold ">
            <h1 className="text-2xl">{item.title}</h1>
            <h2 className="group-hover:hidden">${item.price}</h2>
            <button className="uppercase group-hover:block bg-red-500 text-white p-2 rounded-md hidden">
              add to cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
