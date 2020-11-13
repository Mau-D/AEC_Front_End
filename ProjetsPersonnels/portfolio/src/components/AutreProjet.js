import React from "react";
import { Card, Col } from "react-bootstrap";
import { GoMarkGithub } from "react-icons/go";
//animation react-reveal
import Flip from "react-reveal/Flip";

function AutreProjet(props) {
  const rotation = Math.floor(Math.random() * 120 - 60);
  /*var direction = anim();
  function anim() {
    const flip = ["left", "right", "top", "bottom"];
    var n = Math.floor(Math.random() * (flip.length - 1)) + 0;
    var result = flip[n];
    return result;
  }*/

  return (
    <>
      <Col xs={12} sm={6} lg={3} className="mb-3 text-center p-0" id="autres">
        <Flip bottom>
          <Card
            className="apropos mt-3 p-2 autre"
            style={{ transform: "rotate(" + rotation + "deg)" }}
          >
            <a href={props.lienWeb} target="_blank" rel="noopener noreferrer">
              <Card.Img
                fluid
                variant="top"
                src={props.image}
                className="autreImg"
              />
            </a>
            <Card.Body className="p-0">
              <Card.Title className="mt-5 p-0">
                <h5 className="m-0">{props.titre}</h5>
              </Card.Title>

              <Card.Text className="font-small p-0 m-0">
                <a href={props.lien} target="_blank" rel="noopener noreferrer">
                  <h5>
                    <GoMarkGithub />
                  </h5>
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Flip>
      </Col>
    </>
  );
}

export default AutreProjet;
