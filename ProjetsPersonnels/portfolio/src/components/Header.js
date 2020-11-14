import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Image } from "react-bootstrap";
import { IMAGES } from "../constantes";
import { GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";

function Header() {
  const activeStyle = { color: "#FEAE4B" };
  return (
    <>
      <Navbar className="fixed-top mb-5" expand="md">
        <Navbar.Brand>
          <Image src={IMAGES.logo} />
        </Navbar.Brand>
        <Navbar.Toggle className="mr-5" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto text-center px-3">
            <NavLink
              exact
              to="/"
              activeStyle={activeStyle}
              className="my-4 p-2"
            >
              Accueil
            </NavLink>

            <NavLink
              to="/apropos"
              activeStyle={activeStyle}
              className="p-2 my-4"
            >
              À propos
            </NavLink>
            <NavLink
              to="/projets"
              activeStyle={activeStyle}
              className="p-2 my-4"
            >
              Projets
            </NavLink>
            <NavLink
              to="/contact"
              activeStyle={activeStyle}
              className="p-2 my-4"
            >
              Contact
            </NavLink>
          </Nav>
          <Nav className="ml-auto text-center">
            <a
              href="https://github.com/Mau-D/AEC_Front_End"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-5 mr-sm-5 my-3 p-0"
            >
              <h1>
                <GoMarkGithub />
              </h1>
            </a>
            <a
              href="https://www.linkedin.com/in/maud-harvey-70569159"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-5 mr-sm-5 my-3 p-0"
            >
              <h1>
                <GrLinkedin />
              </h1>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
