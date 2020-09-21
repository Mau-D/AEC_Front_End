import React from "react";
import { Image, Col } from "react-bootstrap";

//Component pour Le cas d'une page introuvable
function Photo(props) {
  return (
    <>
      {Object.keys(props.photosAttrait).map((key, i) => (
        <Col sm="4" className="my-4">
          <Image
            height="100%"
            width="100%"
            src={props.photosAttrait[key].image_attrait}
          />
        </Col>
      ))}
    </>
  );
}
//Il faut exporter les fonctions
export default Photo;
