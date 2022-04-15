import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import banner from "../../../Assets/images/banner/bannerbackground.png";

const Banner = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "500px",
      }}
    >
      <div className="text-center">
        <h1>Best ood waiting for your belly</h1>
        <div class="input-group mb-3">
          <input
            style={{ position: "relative" }}
            type="text"
            class="form-control rounded-pill w-100"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            style={{ position: "absolute", right: "0", zIndex: "20" }}
            class="bg-red text-white btn btn-outline-danger rounded-pill"
            type="button"
            id="button-addon2"
          >
            Button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
