import React from "react";
import { Nav, Navbar, Button, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Titre } from "./Titre";

function Menu() {
  const activeStyle = { color: "pink" };
  return (
    <>
      <Navbar expand="lg" class>
        <Navbar.Brand>
          <Titre />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavLink exact to="/" activeStyle={activeStyle} className="ml-5">
              Accueil
            </NavLink>

            <NavLink
              to="/listetrips"
              activeStyle={activeStyle}
              className="ml-5"
            >
              Road Trips
            </NavLink>
          </Nav>
          <Nav>
            <Button variant="secondary" size="sm" id="boutonInstall">
              Installer l'application
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default Menu;