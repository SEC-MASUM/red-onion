import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Menu from "../Menu/Menu/Menu";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div>
        <Menu></Menu>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Home;
