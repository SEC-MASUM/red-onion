import React from "react";

const DeliveryDetails = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center  w-[500px] pb-7 mx-auto">
        <div className="w-full space-y-4">
          <h2 className="text-left text-xl font-medium text-gray-800  capitalize">
            Edit Delivery Details
          </h2>
          <hr className=" border-gray-800" />

          <input
            id="delivery-method"
            className="focus:ring-gray-300  text-gray-800 font-medium focus:ring-2 focus:bg-white w-full bg-gray-100 border-0 shadow rounded-lg px-4 py-2 mb-5"
            type="text"
            placeholder="Delivery Method"
            // value="Delivery to door"
          />
          <input
            id="street"
            className="text-gray-800 font-medium  focus:ring-gray-300  focus:ring-2 focus:bg-white w-full bg-gray-100 border-0 shadow rounded-lg px-4 py-2 mb-5"
            type="text"
            placeholder="Street Name"
          />
          <input
            id="house"
            className="text-gray-800 font-medium  focus:ring-gray-300  focus:ring-2 focus:bg-white w-full bg-gray-100 border-0 shadow  rounded-lg px-4 py-2 mb-5"
            type="text"
            placeholder="Flat, suite or floor"
          />
          <input
            id="business-name"
            className="text-gray-800 font-medium  focus:ring-gray-300  focus:ring-2 focus:bg-white  w-full bg-gray-100 border-0 shadow  rounded-lg px-4 py-2 mb-5"
            type="text"
            placeholder="Business Name"
          />
          <textarea
            rows="2"
            maxLength="300"
            id="instruction"
            className="text-gray-800 font-medium  focus:ring-gray-300  focus:ring-2 focus:bg-white  w-full bg-gray-100 border-0 shadow  rounded-lg px-4 py-2 mb-5"
            type="text"
            placeholder="Add delivery instruction"
          />

          <button
            id="login-button"
            className="w-full  font-medium text-white bg-rose-600 uppercase block  shadow-sm rounded-lg px-6 py-2 mb-3 mx-auto"
          >
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
