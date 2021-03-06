import React from "react";
import { NavLink } from "react-router-dom";
import lunch1 from "../../../../Assets/images/lunch/lunch1.png";
import lunch2 from "../../../../Assets/images/lunch/lunch2.png";
import lunch3 from "../../../../Assets/images/lunch/lunch3.png";
import lunch4 from "../../../../Assets/images/lunch/lunch4.png";
import lunch5 from "../../../../Assets/images/lunch/lunch5.png";
import lunch6 from "../../../../Assets/images/lunch/lunch6.png";
import Item from "../../Item/Item";

const lunchData = [
  {
    id: 1,
    title: "Healthy Meal Plan",
    desc: "How we dream about our future",
    img: lunch1,
    price: 23.99,
  },
  {
    id: 2,
    title: "Healthy Meal Plan",
    desc: "How we dream about our future",
    img: lunch2,
    price: 23.99,
  },
  {
    id: 3,
    title: "Healthy Meal Plan",
    desc: "How we dream about our future",
    img: lunch3,
    price: 23.99,
  },
  {
    id: 4,
    title: "Healthy Meal Plan",
    desc: "How we dream about our future",
    img: lunch4,
    price: 23.99,
  },
  {
    id: 5,
    title: "Healthy Meal Plan",
    desc: "How we dream about our future",
    img: lunch5,
    price: 23.99,
  },
  {
    id: 6,
    title: "Healthy Meal Plan",
    desc: "How we dream about our future",
    img: lunch6,
    price: 23.99,
  },
];

const Lunch = () => {
  return (
    <div className="container  mx-auto">
      <div className=" grid grid-cols-3 gap-x-4 gap-y-8  my-12">
        {lunchData.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </div>
      <div className="text-center mb-8">
        <NavLink
          to="/checkout"
          className="bg-rose-600 text-white px-4 py-3 rounded-lg"
        >
          Checkout Your Food
        </NavLink>
      </div>
    </div>
  );
};

export default Lunch;
