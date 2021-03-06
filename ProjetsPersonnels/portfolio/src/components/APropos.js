import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Chart from "react-google-charts";
import Logos from "./Logos";
import DetailsFormation from "./DetailsFormation";
import "../styles/apropos.sass";
//animations react reveal
import Swing from "react-reveal/Swing";

//import CV from "./CV";
//import Projets from "./Projets";

function APropos() {
  return (
    <>
      <Row className="pt-5 pb-5"></Row>
      <Container fluid id="apropos">
        {/* Texte de présentation */}
        <Row>
          <Swing>
            <Col xs={8} className="mb-5 mt-5 bkgorange">
              <h1 className="p-5 ">À propos</h1>
            </Col>
          </Swing>

          <Col xs={10}></Col>
        </Row>
        <Row>
          <Col xs={12}>
            <div className="tableauTexte p-1 p-sm-5 m-sm-5 font-medium">
              <p>
                Allo! je suis nouvellement arrivée dans la région du Saguenay et
                actuellement en formation pour l'obtention d'une attestation
                d'études collégiales en développement WEB Front-End. Je possède
                un diplôme collégial en technologie physique avec quinze ans
                d’expérience comme technicienne. Tout au long de mon parcours,
                j’ai été reconnue pour être une personne qui s’implique dans son
                milieu et qui recherche toujours de nouvelles idées.
                L’innovation, la recherche et le développement sont des éléments
                importants pour moi qui ont guidé mes choix de carrière.
              </p>
              <p>
                Le développement Web était donc, une évidence dans mon choix de
                vie. Ce changement de carrière fait suite à ma passion des
                technologies et mon désir constant d'apprendre. J'adore la
                résolution de problème et je suis attirée vers ce nouveau style
                de vie combinant création et techniques.
              </p>
              <p>
                Je suis enthousiaste de connaître ce milieu où ma capacité
                d’analyse, ma créativité et mon esprit de collaboration pourront
                être mis à projet.
              </p>
            </div>
          </Col>
        </Row>

        {/* Nom de la formation et diagramme de gantt */}
        <Row>
          <Col xs={12} md={3}>
            <h2>AEC Développement Web (NWE.2U)</h2>
            <h3>Développeur Front-end</h3>
            <Image
              fluid
              className="pl-5 pr-5"
              src="https://www.lescegeps.com/_image/large/21/i21733prc.jpg"
            />
          </Col>
          <Col xs={12} md={9} className="mt-5">
            <Chart
              width={"100%"}
              height={"400px"}
              chartType="Gantt"
              loader={<div>Loading Chart</div>}
              data={[
                [
                  { type: "string", label: "Task ID" },
                  { type: "string", label: "Task Name" },
                  { type: "string", label: "Nombre d'heures" },
                  { type: "date", label: "Start Date" },
                  { type: "date", label: "End Date" },
                  { type: "number", label: "Durée" },
                  { type: "number", label: "Complété" },
                  { type: "string", label: "Dependencies" },
                ],
                [
                  "Integration1",
                  "Intégration",
                  "60 heures",
                  new Date(2019, 10, 15),
                  new Date(2020, 4, 4),
                  null,
                  100,
                  null,
                ],
                [
                  "Programmation1",
                  "JavaScript",
                  "90 heures",
                  new Date(2019, 10, 15),
                  new Date(2020, 4, 4),
                  null,
                  100,
                  null,
                ],
                [
                  "Infrastructure",
                  "PHP",
                  "60 heures",
                  new Date(2020, 4, 14),
                  new Date(2020, 9, 26),
                  null,
                  100,
                  null,
                ],
                [
                  "Intégration2",
                  "Intégration",
                  "60 heures",
                  new Date(2020, 4, 14),
                  new Date(2020, 9, 26),
                  null,
                  100,
                  null,
                ],
                [
                  "Programmation2",
                  "React",
                  "90 heures",
                  new Date(2020, 4, 14),
                  new Date(2020, 9, 26),
                  null,
                  100,
                  null,
                ],
                [
                  "Programmation3",
                  "Angular",
                  "90 heures",
                  new Date(2020, 10, 6),
                  new Date(2021, 3, 4),
                  null,
                  20,
                  null,
                ],
                [
                  "Utilisateur",
                  "Vue",
                  "60 heures",
                  new Date(2020, 10, 6),
                  new Date(2021, 3, 4),
                  null,
                  20,
                  null,
                ],
              ]}
              options={{
                height: 400,
                gantt: {
                  trackHeight: 30,
                },
              }}
              rootProps={{ "data-testid": "2" }}
            />
          </Col>
        </Row>
        <Row>
          <Swing>
            <Col xs={8} className="mb-5 bkgorange">
              <h1 className="mb-5 pt-5">Les détails de ma formation</h1>
            </Col>
          </Swing>
        </Row>
        <Row className="mt-5">
          <Col xs={12}>
            <Container>
              <Row>
                <DetailsFormation />
              </Row>
            </Container>
          </Col>
        </Row>
        {/* Logos des différents langages, librairies et frameworks */}
        <Row className="mt-5 text-center">
          <Logos></Logos>
        </Row>
      </Container>
    </>
  );
}

export default APropos;
