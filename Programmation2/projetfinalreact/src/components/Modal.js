import React, { useState, useEffect } from "react";
import { Modal, Container } from "react-bootstrap";
//Dans ce cas il n'y a pas d'état ou d'appel au serveur, pas useState  et de useEffect
//Remplacer la class par la function
//Mettre le mot props en paramètre
//aller chercher le props = props.history, le defaultProps n'a pas besoin du props.
//history={props.history}
function Modal() {
  return (
    <>
      <Modal.Dialog show={show} handleClose={hideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  );
}

AjouterTrip.defaultProps = { history: "/listetrips" };
export default AjouterTrip;
