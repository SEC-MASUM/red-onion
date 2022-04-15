import React from "react";

const Item = ({ item }) => {
  const { img, title, desc, price } = item;
  return (
    <div>
      <div className="w-72 flex flex-col items-center rounded-md hover:shadow-lg p-8 mx-auto">
        <img src={img} alt="" className="h-50" />
        <h3 className="font-medium text-base pt-4">{title}</h3>
        <p>
          <small className="text-gray-400">{desc}</small>
        </p>
        <h2 className="font-medium text-xl">
          <span>$</span>
          {price}
        </h2>
      </div>
    </div>
  );
};

export default Item;
