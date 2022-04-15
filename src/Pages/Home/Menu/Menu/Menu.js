import React from "react";
import { Link, Outlet } from "react-router-dom";

const Menu = () => {
  return (
    <nav className=" font-sans  m-0">
      <div className=" container  flex justify-center mx-auto px-4 py-4">
        <Link
          to="/home/breakfast"
          className="uppercase text-sm font-semibold mx-1 hover:text-rose-600 focus:text-rose-600 transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-rose-600 focus:border-rose-600"
        >
          Breakfast
        </Link>
        <Link
          to="/home/lunch"
          className="uppercase text-sm font-semibold mx-1 hover:text-rose-500 focus:text-rose-600 transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-rose-600 focus:border-rose-600"
        >
          Lunch
        </Link>
        <Link
          to="/home/dinner"
          className="uppercase text-sm font-semibold mx-1 hover:text-rose-500 focus:text-rose-600 transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-rose-600 focus:border-rose-600"
        >
          Dinner
        </Link>
      </div>
      
    </nav>
  );
};

export default Menu;
