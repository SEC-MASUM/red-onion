import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/logo/logo3.png";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FcGoogle, } from "react-icons/fc";

const Login = () => {
  return (
    <div className="container mx-auto">
      <div class="text-center  w-[500px] pb-7 mx-auto">
        <div>
          <div className="my-4">
            <img src={logo} alt="" className="h-20 mx-auto" />
          </div>
          <h2 class="text-3xl font-bold text-rose-600 mb-5 capitalize">
            Log In
          </h2>
          <input
            id="email"
            class="focus:ring-gray-300  focus:ring-2 focus:bg-white w-4/5  bg-gray-100 border-0 shadow rounded-lg px-4 py-3 mb-5"
            type="email"
            placeholder="Email"
            required
          />
          <input
            id="password"
            class="focus:ring-gray-300  focus:ring-2 focus:bg-white w-4/5  bg-gray-100 border-0 shadow rounded-lg px-4 py-3 mb-5"
            type="password"
            placeholder="Password"
            required
          />
          <button
            id="login-button"
            class="w-4/5 font-medium text-white bg-rose-600 uppercase block shadow-gray-400 shadow-sm rounded-lg px-6 py-3 mb-3 mx-auto"
          >
            Log in
          </button>
          <p>
            New to Red Onion?{" "}
            <Link to="/signup">
              <span className="text-rose-600">Create An Account</span>
            </Link>
          </p>
        </div>
        <div className="flex justify-center mt-3">
          <p className="flex w-3/5 text-center items-center ">
            <div className="w-full block h-1 bg-rose-600"></div>
            <div class="block px-4">Or</div>
            <div className="w-full block h-1 bg-rose-600"></div>
          </p>
        </div>
        <div className="flex justify-center items-center p-5 space-x-3">
          <button
            id="facebook-login"
            className="text-2xl border-2 border-rose-300 rounded-full p-1 text-blue-600"
          >
            <BsFacebook></BsFacebook>
          </button>
          <button class="text-2xl border-2 border-rose-300  rounded-full p-1">
            <FcGoogle></FcGoogle>
          </button>
          <button class="text-2xl border-2 border-rose-300 rounded-full p-1">
            <BsGithub></BsGithub>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
