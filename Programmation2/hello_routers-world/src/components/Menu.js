import React from "react";
import { Nav, Navbar, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
//Component pour le menu de navigation
//Utiliser le NavLink de react-router-dom et le props activeStyle
export class Menu extends React.Component {
  render() {
    const activeStyle = { color: "orange" };
    return (
      <>
        <Navbar bg="dark" variant="dark" className="px-0 py-0">
          <Navbar.Brand href="/" className="py-0">
            <Image
              src={require("../img/logoTadoussac.jpg")}
              height="75px"
              width="50px"
            />
          </Navbar.Brand>

          <Nav className="">
            <NavLink className="mr-3" exact to="/" activeStyle={activeStyle}>
              Accueil
            </NavLink>
            <NavLink
              className="mr-3"
              to="/GaleriePhotos"
              activeStyle={activeStyle}
            >
              Photos
            </NavLink>
            <NavLink className="mr-3" to="/Video" activeStyle={activeStyle}>
              Vidéo
            </NavLink>
            <NavLink className="mr-3" to="/Carte" activeStyle={activeStyle}>
              Carte
            </NavLink>
            <NavLink
              className="mr-3"
              to="/Personnage"
              activeStyle={activeStyle}
            >
              Personnages
            </NavLink>
          </Nav>
        </Navbar>
        <br />
      </>
    );
  }
}
