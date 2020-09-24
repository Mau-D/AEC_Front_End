import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { API } from "../constantes";
import hoverEffect from "hover-effect";
import "../style/details.sass"; /*Modifier ce fichier pour le style en sass*/

//Fonction pour afficher les détails du road trip
function DetailTrip(props) {
  const rue = require("../img/rue.jpg");
  const voiture = require("../img/voiture_orange.jpg");
  const transition = require("../img/10.jpg");

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
  //animation
  new hoverEffect({
    parent: document.querySelector(".my-div"),
    intensity1: 0.1,
    intensity2: 0.1,
    angle2: Math.PI / 2,
    image1: rue,
    image2: voiture,
    displacementImage: transition,
  });

  return (
    <>
      <Container id="details">
        <Row className="mb-5">
          <Col sm={12}>
            <div className="my-div">
              <h1 className="animText m-5 font-xlarge">
                Vous êtes enfin prêt!
              </h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="my-div h-100"></div>
          </Col>
        </Row>
        <Row>
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
                <h2 className="mt-5 font-xlarge">{donneesRecuesDetail.nom}</h2>
              </Link>
            </Col>
          </Row>
          <Row>
            {/* description*/}
            <Col className="mb-5" sm={12}>
              <p className="mt-5 font-medium">
                {donneesRecuesDetail.description}
              </p>
              <h4 className="mt-5 font-small">{donneesRecuesDetail.region}</h4>
            </Col>
          </Row>
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

        {/* Les attraits*/}
        {Object.keys(donneesRecuesDetail.attraits).map((att, i) =>
          donneesRecuesDetail.attraits[att].nom_attrait !== "" ? (
            Number.isInteger([att] / 2) ? (
              <Row key={"details" + i} className="mt-5 detailsText ">
                <Col className="my-4" md={4}>
                  <Image
                    fluid
                    src={donneesRecuesDetail.attraits[att].image_attrait}
                  />
                </Col>
                <Col className="my-4 p-2" md={8}>
                  <h3>{donneesRecuesDetail.attraits[att].nom_attrait}</h3>
                  <p className="font-small">
                    {donneesRecuesDetail.attraits[att].description_attrait}
                  </p>
                  <p>{donneesRecuesDetail.attraits[att].ville}</p>
                </Col>
              </Row>
            ) : (
              <Row key={"details" + i} className="mt-5 detailsText">
                <Col className="my-4 p-2" md={8}>
                  <h3>{donneesRecuesDetail.attraits[att].nom_attrait}</h3>
                  <p className="font-small">
                    {donneesRecuesDetail.attraits[att].description_attrait}
                  </p>
                  <p>{donneesRecuesDetail.attraits[att].ville}</p>
                </Col>
                <Col className="my-4" md={4}>
                  <Image
                    fluid
                    src={donneesRecuesDetail.attraits[att].image_attrait}
                  />
                </Col>
              </Row>
            )
          ) : null
        )}
      </Container>
    </>
  );
}
//Il faut exporter les fonctions
export default DetailTrip;
