import React from "react";
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
