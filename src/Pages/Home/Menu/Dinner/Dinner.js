import React from "react";
import dinner1 from "../../../../Assets/images/dinner/dinner1.png";
import dinner2 from "../../../../Assets/images/dinner/dinner2.png";
import dinner3 from "../../../../Assets/images/dinner/dinner3.png";
import dinner4 from "../../../../Assets/images/dinner/dinner4.png";
import dinner5 from "../../../../Assets/images/dinner/dinner5.png";
import dinner6 from "../../../../Assets/images/dinner/dinner6.png";
import Item from "../../Item/Item";

const dinnerData = [
  {
    id: 1,
    title: "Healthy Meal Plan",
    desc: "How we dream about our future",
    img: dinner1,
    price: 23.99,
  },
  {
    id: 2,
    title: "Healthy Meal Plan",
    desc: "How we dream about our future",
    img: dinner2,
    price: 23.99,
  },
  {
    id: 3,
    title: "Healthy Meal Plan",
    desc: "How we dream about our future",
    img: dinner3,
    price: 23.99,
  },
  {
    id: 4,
    title: "Healthy Meal Plan",
    desc: "How we dream about our future",
    img: dinner4,
    price: 23.99,
  },
  {
    id: 5,
    title: "Healthy Meal Plan",
    desc: "How we dream about our future",
    img: dinner5,
    price: 23.99,
  },
  {
    id: 6,
    title: "Healthy Meal Plan",
    desc: "How we dream about our future",
    img: dinner6,
    price: 23.99,
  },
];


const Dinner = () => {
  return (
    <div className="container grid grid-cols-3 gap-x-4 gap-y-8 mx-auto my-12">
      {dinnerData.map((item) => (
        <Item key={item.id} item={item}></Item>
      ))}
    </div>
  );
};

export default Dinner;
