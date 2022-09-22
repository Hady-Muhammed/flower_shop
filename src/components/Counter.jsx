import React, { useState } from "react";
import {ProductsData} from '../data'

const Counter = ({ productID }) => {
  const [counter, setCounter] = useState(1);
  const handleINC = () => {
    setCounter(counter + 1);
    ProductsData[productID - 1].count += 1
    console.log( ProductsData[productID - 1].count)
  };
  const handleDEC = () => {
    if(counter >= 2) {
      setCounter(counter - 1);
      ProductsData[productID - 1].count -= 1
      console.log( ProductsData[productID - 1].count)
    }
  };
  return (
    <div className="flex items-center justify-start space-x-5">
      <button
        onClick={handleDEC}
        className="text-xl border border-black rounded-md duration-150 hover:bg-black hover:text-white h-[35px] w-[40px]"
      >
        -
      </button>
      <span>{counter}</span>
      <button
        onClick={handleINC}
        className="text-xl border border-black rounded-md duration-150 hover:bg-black hover:text-white h-[35px] w-[40px]"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
