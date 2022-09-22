import React from "react";

const Card = ({ Icon, h4, p }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="flex p-5 space-x-3 bg-white items-center w-[300px] mx-auto hover:shadow-pink-200 hover:shadow-lg duration-500"
    >
      <div className="icon text-5xl">
        <Icon />
      </div>
      <div>
        <h4 className="font-semibold text-xl">{h4}</h4>
        <p className="text-gray-400">{p}</p>
      </div>
    </div>
  );
};

export default Card;
