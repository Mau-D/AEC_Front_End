import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Image } from "react-bootstrap";
import { IMAGES } from "../constantes";

function Header() {
  const activeStyle = { color: "#FEAE4B" };
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand className="mr-0">
          <Image src={IMAGES.logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto text-center">
            <NavLink
              exact
              to="/"
              activeStyle={activeStyle}
              className="my-auto pl-5"
            >
              Accueil
            </NavLink>

            <NavLink
              to="/apropos"
              activeStyle={activeStyle}
              className="ml-5 my-auto"
            >
              À propos
            </NavLink>
            <NavLink
              to="/projets"
              activeStyle={activeStyle}
              className="ml-5 my-auto"
            >
              Projets
            </NavLink>
            <NavLink
              to="/contact"
              activeStyle={activeStyle}
              className="ml-5 my-auto"
            >
              Contact
            </NavLink>
            <NavLink
              to="/onepage"
              activeStyle={activeStyle}
              className="ml-5 mr-5 my-auto"
            >
              Onepage
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
