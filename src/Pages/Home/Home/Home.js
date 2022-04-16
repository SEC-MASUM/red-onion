import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Banner from "../Banner/Banner";
import Breakfast from "../Menu/Breakfast/Breakfast";
import Menu from "../Menu/Menu/Menu";

const Home = () => {
  const location = useLocation();
  console.log(location);
  const path = location.pathname;
  console.log(path);
  return (
    <>
      <Banner></Banner>
      <div>
        <Menu></Menu>
        <div>{path === "/" ? <Breakfast></Breakfast> : <Outlet></Outlet>}</div>
        {path === "/checkout" ? (
          ""
        ) : (
          <div className="text-center mb-8">
            <NavLink
              to="/checkout"
              className="bg-rose-600 text-white px-4 py-3 rounded-lg"
            >
              Checkout Your Food
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
