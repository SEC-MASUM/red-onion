import React from "react";
import breakfast1 from "../../../../Assets/images/breakfast/breakfast1.png";
import breakfast2 from "../../../../Assets/images/breakfast/breakfast2.png";
import breakfast3 from "../../../../Assets/images/breakfast/breakfast3.png";
import breakfast4 from "../../../../Assets/images/breakfast/breakfast4.png";
import breakfast5 from "../../../../Assets/images/breakfast/breakfast5.png";
import breakfast6 from "../../../../Assets/images/breakfast/breakfast6.png";
import Item from "../../Item/Item";

const breakfastData = [
  {
    id: 1,
    title: "Healthy Meal Plan",
    desc: "How we dream about our future",
    img: breakfast1,
    price: 23.99,
  },
  {
    id: 2,
    title: "Healthy Meal Plan",
    desc: "How we dream about our future",
    img: breakfast2,
    price: 23.99,
  },
  {
    id: 3,
    title: "Healthy Meal Plan",
    desc: "How we dream about our future",
    img: breakfast3,
    price: 23.99,
  },
  {
    id: 4,
    title: "Healthy Meal Plan",
    desc: "How we dream about our future",
    img: breakfast4,
    price: 23.99,
  },
  {
    id: 5,
    title: "Healthy Meal Plan",
    desc: "How we dream about our future",
    img: breakfast5,
    price: 23.99,
  },
  {
    id: 6,
    title: "Healthy Meal Plan",
    desc: "How we dream about our future",
    img: breakfast6,
    price: 23.99,
  },
];

const Breakfast = () => {
  return (
    <div className="container grid grid-cols-3 gap-x-4 gap-y-8 mx-auto my-12">
      {breakfastData.map((item) => (
        <Item key={item.id} item={item}></Item>
      ))}
    </div>
  );
};

export default Breakfast;
