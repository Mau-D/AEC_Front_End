import React from "react";
import FormAjouterTrip from "./FormAjouterTrip";

function AjouterTrip(props) {
  return (
    <>
      <FormAjouterTrip historyAjout={props.history} />
    </>
  );
}

AjouterTrip.defaultProps = { history: "/listetrips" };
export default AjouterTrip;
