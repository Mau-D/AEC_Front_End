import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API } from "../constantes";
import "../style/test.sass"; /*Modifier ce fichier pour le style en sass*/

//Fonction pour afficher les détails du road trip
function DetailTrip(props) {
  //Constantes en useState pour les infos et l'id
  const [donneesRecuesDetail, setDonneesRecuesDetail] = useState({
    _id: "",
    nom: "",
    image1: "",
    image2: "",
    image3: "",
    description: "",
    attraits: ["", ""],
  });

  const tripDetailID = props.location.search.substring(
    4,
    props.location.search.length
  );
  //Appel à l'API, pour obtenir les données du road trip à partir de l'id
  useEffect(() => {
    getInfosDetail();
  }, []);
  //On récupère la moto pour ensuite remplir le formulaire.Pour le hook renommer getMoto
  async function getInfosDetail() {
    //On récupère le dernier caractère de l'url substring(4,fin du string)
    //*********Le state motoID, n'est pas déclaré au début de la fonction ou classe************ */
    try {
      const response = await fetch(API + tripDetailID);
      const reponseDeApi = await response.json();
      setDonneesRecuesDetail(reponseDeApi);

      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <h1>Vous êtes enfin prêt!</h1>
      <Row>
        {/* Carousselle d'images */}
        <Col className="h-50 mb-5" sm={12}>
          <Carousel id="myCarousel">
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src={donneesRecuesDetail.image1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src={donneesRecuesDetail.image2}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        {/* titre*/}
        <Col className="mb-5" sm={12}>
          <Link
            to={
              "edit/" +
              donneesRecuesDetail.nom +
              "?id=" +
              donneesRecuesDetail._id
            }
          >
            <h2>{donneesRecuesDetail.nom}</h2>
          </Link>
        </Col>
      </Row>
      <Row>
        {/* description*/}
        <Col className="mb-5" sm={12}>
          <p>{donneesRecuesDetail.description}</p>
          <h4>{donneesRecuesDetail.region}</h4>
        </Col>
      </Row>
      {/* Les attraits*/}
      {Object.keys(donneesRecuesDetail.attraits).map((att, i) =>
        Number.isInteger([att] / 2) ? (
          <Row key={"details" + i}>
            <Col className="mb-4" md={4}>
              <Image
                fluid
                src={donneesRecuesDetail.attraits[att].image_attrait}
              />
            </Col>
            <Col className="mb-4" md={8}>
              <h3>{donneesRecuesDetail.attraits[att].nom_attrait}</h3>
              <p>{donneesRecuesDetail.attraits[att].description_attrait}</p>
              <p>{donneesRecuesDetail.attraits[att].ville}</p>
            </Col>
          </Row>
        ) : (
          <Row key={"details" + i}>
            <Col className="mb-4" md={8}>
              <h3>{donneesRecuesDetail.attraits[att].nom_attrait}</h3>
              <p>{donneesRecuesDetail.attraits[att].description_attrait}</p>
              <p>{donneesRecuesDetail.attraits[att].ville}</p>
            </Col>
            <Col className="mb-4" md={4}>
              <Image
                fluid
                src={donneesRecuesDetail.attraits[att].image_attrait}
              />
            </Col>
          </Row>
        )
      )}
    </Container>
  );
}
//Il faut exporter les fonctions
export default DetailTrip;
