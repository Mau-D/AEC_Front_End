import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Image } from "react-bootstrap";
import { IMAGES } from "../constantes";

function Header() {
  const activeStyle = { color: "#FEAE4B" };
  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand>
          <Image src={IMAGES.logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto text-center">
            <NavLink
              exact
              to="/"
              activeStyle={activeStyle}
              className="my-4 pl-5"
            >
              Accueil
            </NavLink>

            <NavLink
              to="/apropos"
              activeStyle={activeStyle}
              className="ml-5 my-4"
            >
              À propos
            </NavLink>
            <NavLink
              to="/projets"
              activeStyle={activeStyle}
              className="ml-5 my-4"
            >
              Projets
            </NavLink>
            <NavLink
              to="/contact"
              activeStyle={activeStyle}
              className="ml-5 mr-sm-5 my-4"
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
