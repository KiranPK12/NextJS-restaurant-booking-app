import React from "react";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";

interface PriceProps {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
}

const Price: React.FC<PriceProps> = ({ price, id, options }: PriceProps) => {
  return (
    <div>
      <h2>${price.toFixed(2)}</h2>
      <div>
        {options?.map((option) => (
          <button className="" key={option.title}>
            {option.title}
          </button>
        ))}
      </div>
      <div>
        <span>Quantity</span>
        <div>
          <AiFillPlusSquare />
          <span>1</span>
          <AiFillMinusSquare />
        </div>
      </div>
    </div>
  );
};

export default Price;
