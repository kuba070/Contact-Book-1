import React from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Link to="/">
            <Navbar.Brand>Home</Navbar.Brand>
          </Link>
          <Link to="/counter">
            <Navbar.Brand>Counter</Navbar.Brand>
          </Link>
          <Link to="/add">
            <Navbar.Brand>Add Contact</Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
