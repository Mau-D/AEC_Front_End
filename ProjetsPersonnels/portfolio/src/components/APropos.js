import React, { useState } from "react";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import Chart from "react-google-charts";
import Logos from "./Logos";
import DetailsFormation from "./DetailsFormation";

//import CV from "./CV";
//import Projets from "./Projets";

function APropos() {
  const [show, setShow] = useState(false);
  function handleClick() {
    setShow(true);
  }
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
                  "Programmation1",
                  "Techniques de programmation Web 1",
                  "90 heures",
                  new Date(2019, 10, 15),
                  new Date(2020, 4, 4),
                  null,
                  100,
                  null,
                ],
                [
                  "PHP",
                  "Infrastructure WEB",
                  "60 heures",
                  new Date(2020, 4, 14),
                  new Date(2020, 9, 26),
                  null,
                  100,
                  null,
                ],
                [
                  "Intégration2",
                  "Techniques d'intégration d'interfaces Web 2",
                  "60 heures",
                  new Date(2020, 4, 14),
                  new Date(2020, 9, 26),
                  null,
                  100,
                  null,
                ],
                [
                  "Programmation2",
                  "Techniques de programmation Web 2",
                  "90 heures",
                  new Date(2020, 4, 14),
                  new Date(2020, 9, 26),
                  null,
                  100,
                  null,
                ],
                [
                  "Programmation3",
                  "Techniques de programmation Web 3",
                  "90 heures",
                  new Date(2020, 10, 6),
                  new Date(2021, 3, 4),
                  null,
                  20,
                  null,
                ],
                [
                  "Utilisateur",
                  "Intégration d'interface utilisateur",
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
        {/* Lien des détails de la formation*/}
        <Row>
          <Col>
            <Button onClick={handleClick}>Voir Détails</Button>
          </Col>
        </Row>
        {/* Affichage de la section des détails de la formation lors du clic*/}
        {show ? <DetailsFormation /> : null}
        {/* Logos des différents langages, librairies et frameworks */}
        <Row>
          <Logos></Logos>
        </Row>
      </Container>
    </>
  );
}

export default APropos;
