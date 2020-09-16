import React, { useState, useEffect } from "react";
import Photo from "./Photo";
import { API } from "../constantes";
import { Container, Row } from "react-bootstrap";

//Component pour Le cas d'une page introuvable
function AffichageImageAttraits() {
  const [donneesRecuesImages, setDonneesRecuesImages] = useState([]);

  //Pour le CRUD utiliser useEffect
  useEffect(() => {
    //appelle la fonction getMotorcycles
    getImages();
  }, []); //Si on enlève le second paramètre, on obtient une boucle infinie, indique quelle constante à vérifier
  //Changer le componentDidMount par une fonction
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
      <h1>Affichage des images</h1>

      <Row>
        {donneesRecuesImages.map((key) => (
          <Photo photosAttrait={key.attraits} />
        ))}
      </Row>
    </Container>
  );
}
//Il faut exporter les fonctions
export default AffichageImageAttraits;
