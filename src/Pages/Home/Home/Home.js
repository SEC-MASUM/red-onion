import React from "react";
import { Outlet, useLocation } from "react-router-dom";
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
      </div>
    </>
  );
};

export default Home;
