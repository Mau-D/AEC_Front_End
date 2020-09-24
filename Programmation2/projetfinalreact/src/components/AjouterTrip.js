import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import FormAjouterTrip from "./FormAjouterTrip";

function AjouterTrip(props) {
  return (
    <>
      <FormAjouterTrip history={props.history} />
    </>
  );
}

AjouterTrip.defaultProps = { history: "/listetrips" };
export default AjouterTrip;
