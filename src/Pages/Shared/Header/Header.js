import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../../Assets/images/logo/logo2.png";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      className="text-dark py-3"
      bg="white"

    >
      <Container>
        <Navbar.Brand href="#home">
          <img height={"32px"} src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#cart">
              <FiShoppingCart></FiShoppingCart>
            </Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link
              href="#signUp"
              className="bg-red text-white rounded-pill px-4"
            >
              Sign up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
