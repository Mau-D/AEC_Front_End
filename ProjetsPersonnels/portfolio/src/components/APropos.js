import React from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Chart from "react-google-charts";
import Logos from "./Logos";

//import CV from "./CV";
//import Projets from "./Projets";

function APropos() {
  return (
    <>
      <Container fluid>
        {/* Texte de présentation */}
        <Row>
          <Col xs={12}>
            <p>
              Allo! je suis nouvellement arrivée dans la région du Saguenay, je
              possède un diplôme en technologie physique avec quinze ans
              d’expérience comme technicienne. Tout au long de mon parcours,
              j’ai été reconnue pour être une personne qui s’implique dans son
              milieu et qui cherche toujours à proposer de nouvelles idées.
              L’innovation, la recherche et le développement sont donc des
              éléments importants pour moi qui ont guidé mes choix de carrière.
            </p>
            <p>
              Le développement Web était donc une évidence dans mon choix de
              vie. Ce changement de carrière fait suite à ma passion des
              technologies et mon désir constant d'apprendre. J'adore la
              résolution de problème et je suis attirée vers ce nouveau style de
              vie combinant création et techniques.
            </p>
            <p>
              Donc, je suis enthousiaste de connaître ce milieu où ma capacité
              d’analyse, ma créativité et mon esprit de collaboration pourront
              être mis à projet.
            </p>
          </Col>
        </Row>
        {/* Nom de la formation et diagramme de gantt */}
        <Row>
          <Col xs={3}>
            <h2>AEC Développement Web (NWE.2U)</h2>
            <h3>Développeur Front-end</h3>
            <div>LOGO Cégep de trois-Rivières</div>
          </Col>
          <Col xs={9}>
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
                  "Techniques d'intégration d'interfaces Web 1",
                  "60 heures",
                  new Date(2019, 10, 15),
                  new Date(2020, 4, 4),
                  null,
                  100,
                  null,
                ],
                [
                  "2014Summer",
                  "Summer 2014",
                  "summer",
                  new Date(2014, 5, 21),
                  new Date(2014, 8, 20),
                  null,
                  100,
                  null,
                ],
                [
                  "2014Autumn",
                  "Autumn 2014",
                  "autumn",
                  new Date(2014, 8, 21),
                  new Date(2014, 11, 20),
                  null,
                  100,
                  null,
                ],
                [
                  "2014Winter",
                  "Winter 2014",
                  "winter",
                  new Date(2014, 11, 21),
                  new Date(2015, 2, 21),
                  null,
                  100,
                  null,
                ],
                [
                  "2015Spring",
                  "Spring 2015",
                  "spring",
                  new Date(2015, 2, 22),
                  new Date(2015, 5, 20),
                  null,
                  50,
                  null,
                ],
                [
                  "2015Summer",
                  "Summer 2015",
                  "summer",
                  new Date(2015, 5, 21),
                  new Date(2015, 8, 20),
                  null,
                  0,
                  null,
                ],
                [
                  "2015Autumn",
                  "Autumn 2015",
                  "autumn",
                  new Date(2015, 8, 21),
                  new Date(2015, 11, 20),
                  null,
                  0,
                  null,
                ],
                [
                  "2015Winter",
                  "Winter 2015",
                  "winter",
                  new Date(2015, 11, 21),
                  new Date(2016, 2, 21),
                  null,
                  0,
                  null,
                ],
                [
                  "Football",
                  "Football Season",
                  "sports",
                  new Date(2014, 8, 4),
                  new Date(2015, 1, 1),
                  null,
                  100,
                  null,
                ],
                [
                  "Baseball",
                  "Baseball Season",
                  "sports",
                  new Date(2015, 2, 31),
                  new Date(2015, 9, 20),
                  null,
                  14,
                  null,
                ],
                [
                  "Basketball",
                  "Basketball Season",
                  "sports",
                  new Date(2014, 9, 28),
                  new Date(2015, 5, 20),
                  null,
                  86,
                  null,
                ],
                [
                  "Hockey",
                  "Hockey Season",
                  "sports",
                  new Date(2014, 9, 8),
                  new Date(2015, 5, 21),
                  null,
                  89,
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
        {/* Lien des détails de la formation*/}
        <Row>
          <Col>
            <Link to={"detailsformation/"}>Voir Détails</Link>
          </Col>
        </Row>
        {/* Logos des différents langages, librairies et frameworks */}
        <Row>
          <Logos></Logos>
        </Row>
      </Container>
    </>
  );
}

export default APropos;
