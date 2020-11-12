import React from "react";
import { Card, Col } from "react-bootstrap";
import { GoMarkGithub } from "react-icons/go";

function AutreProjet(props) {
  const rotation = Math.floor(Math.random() * 120 - 60);

  return (
    <>
      <Col xs={12} sm={6} lg={3} className="mt-5 text-center" id="autres">
        <Card
          className="apropos mt-3 p-2 autre"
          style={{ transform: "rotate(" + rotation + "deg)" }}
        >
          <Card.Img fluid variant="top" src={props.image} className="p-2" />
          <Card.Body className="p-0">
            <Card.Title className="m-0 p-0">
              <h5 className="m-0">{props.titre}</h5>
            </Card.Title>

            <Card.Text className="font-small p-0 m-0">
              <a href={props.lien}>
                <h3>
                  <GoMarkGithub />
                </h3>
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default AutreProjet;
