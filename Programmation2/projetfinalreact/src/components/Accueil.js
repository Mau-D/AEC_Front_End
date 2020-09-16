import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import sr from "./ScrollReveal";
import Fade from "react-reveal/Fade";
import { API } from "../constantes";
import { toast } from "react-toastify";

import "../style/accueil.sass"; /*Modifier ce fichier pour le style en sass*/

//Variables pour téléverser les photos des régions
const photos = {
  coccinelle: require("../img/coccinelle.jpg"),
  pieds: require("../img/pieds.jpg"),
  camion: require("../img/camion.jpg"),
  plaque: require("../img/plaque.png"),
  vintage: require("../img/vintage.jpg"),
};

//Component pour la page d'accueil avec un lien vers manageTrips
export class Accueil extends React.Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
  }
  //Pour le titre,
  componentDidMount = () => {
    const config = {
      origin: "right",
      duration: 1000,
      delay: 150,
      distance: "500px",
      scale: 1,
      easing: "ease",
    };
    const config2 = {
      duration: 5000,
      delay: 500,
    };
    const config3 = {
      duration: 5000,
      delay: 1000,
    };
    const config4 = {
      duration: 5000,
      delay: 2000,
    };
    const config5 = {
      duration: 5000,
      delay: 3000,
    };
    const config6 = {
      duration: 5000,
      delay: 4000,
    };
    const config7 = {
      duration: 5000,
      delay: 5000,
    };

    sr.reveal(this.refs.box1, config);
    sr.reveal(this.refs.box2, config2);
    sr.reveal(this.refs.box3, config3);
    sr.reveal(this.refs.box4, config4);
    sr.reveal(this.refs.box5, config5);
    sr.reveal(this.refs.box6, config6);
    sr.reveal(this.refs.box7, config7);
  };
  async remove() {
    try {
      const response = await fetch(API + "5f625540d899cd03e8b4e482", {
        method: "delete",
      });

      if (response.ok) {
        //const jsonResponse = await response.json();

        console.log("SUPPRESSION!");

        return response;
      }

      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <Container fluid>
        <Button variant="primary" size="lg" block id="boutonInstall">
          Installer l'application
        </Button>

        <Row>
          <Col sm={12}>
            <h2>Vous êtes prêt à partir...</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <h2 ref="box2">Quand?</h2>
            <h2 ref="box4">Où?</h2>
            <h2 ref="box6">Comment?</h2>
          </Col>
          <Col sm={6}>
            <h2 ref="box3">Maintenant</h2>
            <h2 ref="box5">N'importe où</h2>
            <h2 ref="box7">En voiture... bien sûr!</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to={"/listetrips"}>Voir tous les road trips...</Link>
          </Col>
        </Row>
        <Row>
          <Container fluid id="pageAccueil">
            <Row className="text-center">
              <Col md={5} className="px-0 border border-dark">
                <Fade left>
                  <Image fluid src={photos.coccinelle} rounded />
                </Fade>
              </Col>
              <Col md={2} className="px-0 border border-dark">
                <p>« Rien ne développe l’intelligence comme les voyages. »</p>
              </Col>
              <Col md={5} className="px-0 border border-dark">
                <Fade right>
                  <Image fluid className="" src={photos.camion} rounded />
                </Fade>
              </Col>
            </Row>
            <Row>
              <Col md={3} className="px-0 border border-dark">
                <p>
                  « Lorsqu’elle s’enfuit, la route est la seule amante qui
                  vaille la peine d’être suivie. »
                </p>
              </Col>
              <Col md={6} className="px-0 border border-dark">
                <Fade down>
                  <Image fluid src={photos.pieds} rounded />
                </Fade>
              </Col>
              <Col md={3} className="px-0 border border-dark">
                <Image fluid className="p-5" src={photos.plaque} rounded />
              </Col>
            </Row>
          </Container>
        </Row>
        <Row>
          <Container class="my-5">
            <h1>À propos de nous...</h1>
            <Row>
              <Col md={{ span: 4, offset: 1 }}>
                <Image fluid className="h-50" src={photos.vintage} rounded />
              </Col>
              <Col md={{ span: 6, offset: 1 }}>
                <p>
                  "Sed ut perspiciatis unde omnis iste natus error sit
                  voluptatem accusantium doloremque laudantium, totam rem
                  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                  architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                  sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                  quia dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur?"
                </p>
              </Col>
            </Row>
          </Container>
        </Row>
        <Row>
          <Container>
            <p>Tout ce que vous pouvez voir!</p>
            <p>Placer les images des différents attraits</p>
          </Container>
        </Row>
        <Button variant="primary" type="submit" onClick={this.remove}>
          supprimer
        </Button>
      </Container>
    );
  }
}
