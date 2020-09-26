import React, { useState, useEffect } from "react";
import Photo from "./Photo";
import { API } from "../constantes";
import { Container, Row } from "react-bootstrap";

//Funcition pour afficher les images des attraits dans la page d'accueil
function AffichageImageAttraits() {
  const [donneesRecuesImages, setDonneesRecuesImages] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  /*Va chercher les images dans la bd */
  async function getImages() {
    try {
      const response = await fetch(API);
      const reponseDeApi = await response.json();
      setDonneesRecuesImages(reponseDeApi);
      if (!response.ok) {
        //Permet d'attraper l'erreur 500 et l'erreur 400
        throw Error(response.statusText);
      }
    } catch (error) {
      //On gère l'erreur
      console.log(error);
    }
  }
  return (
    <Container>
      <h2>Tout ce que vous pouvez voir...</h2>
      <Row className="affichagePhoto bigGray">
        {donneesRecuesImages.map((key, i) => (
          <Photo
            photosAttrait={key.attraits}
            className="haut-5"
            key={"attrait" + i}
          />
        ))}
      </Row>
    </Container>
  );
}

export default AffichageImageAttraits;
