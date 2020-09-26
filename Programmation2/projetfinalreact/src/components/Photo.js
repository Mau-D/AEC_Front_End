import React from "react";
import { Image, Col } from "react-bootstrap";

//Créer une image avec les urls des images des attraits
function Photo(props) {
  return (
    <>
      {Object.keys(props.photosAttrait).map(
        (key, i) =>
          props.photosAttrait[key].image_attrait !== "" && (
            <Col xs={4} className="my-4" key={"image" + i}>
              <Image
                className="smallGray"
                height="100%"
                width="100%"
                src={props.photosAttrait[key].image_attrait}
              />
            </Col>
          )
      )}
    </>
  );
}
//Il faut exporter les fonctions
export default Photo;
