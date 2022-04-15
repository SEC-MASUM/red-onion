import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import banner from "../../../Assets/images/banner/bannerbackground.png";

const Banner = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "500px",
      }}
    >
      <div className="container text-center">
        <h1 className="font-medium text-5xl py-6">Best food waiting for your belly</h1>
        <div className="w-[500px] flex justify-center items-center  mx-auto relative">
          <input
            // style={{ position: "relative" }}
            type="text"
            className="w-full rounded-full border-0 focus:ring-rose-500 focus:ring-4 focus:ring-opacity-50 px-6 py-4"
            placeholder="Search food items"
          />
          <button
            // style={{ position: "absolute", right: "0", zIndex: "20" }}
            className="bg-rose-600 text-white px-10 py-4 rounded-full absolute right-0 focus:ring-rose-500 focus:ring-4 focus:ring-opacity-50"
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
