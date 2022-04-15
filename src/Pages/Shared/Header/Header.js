import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../../Assets/images/logo/logo2.png";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <nav className="bg-white px-2 py-3  ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/">
          <img src={logo} className="h-10" alt="Red Onion Logo" />
        </Link>

        <ul className="flex space-x-8 text-sm font-medium items-center">
          <Link to="/cart" className="text-gray-700 hover:text-rose-600 ">
            <FiShoppingCart></FiShoppingCart>
          </Link>

          <Link to="/login" className="text-gray-700 hover:text-rose-600 ">
            Login
          </Link>

          <Link
            to="/signup"
            className="text-white bg-rose-600 px-4 py-1.5 rounded-full"
          >
            Sign up
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
