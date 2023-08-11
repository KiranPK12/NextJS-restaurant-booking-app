"use client";
import React, { useEffect, useState } from "react";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";

interface PriceProps {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
}

const Price: React.FC<PriceProps> = ({ price, id, options }: PriceProps) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            className="min-w-[6rem] ring-1 ring-red-400 p-2 rounded-md hover:scale-105"
            key={option.title}
            style={{
              background: selected === index ? "rgb(248 113 113)" : "white",
              color: selected === index ? "white" : "red",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex items-center gap-3 justify-between mr-2">
            <button
              className=""
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              <AiFillMinusSquare size={24} />
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              className=""
              onClick={() =>
                setQuantity((prev) => (prev === 10 ? 10 : prev + 1))
              }
            >
              <AiFillPlusSquare size={24} />
            </button>
          </div>
        </div>
        <button className="uppercase w-56 bg-red-500 text-white p-[0.9rem] ring-1 ring-red-500 rounded-r-md ">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
