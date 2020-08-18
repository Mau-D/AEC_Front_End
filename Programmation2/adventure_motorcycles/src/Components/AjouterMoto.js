import React from "react";
import { FormAjouterMoto } from "./FormAjouterMoto";

//Component pour Le cas d'une page introuvable
export class AjouterMoto extends React.Component {
  render() {
    return (
      <>
        <FormAjouterMoto history={this.props.history} />
      </>
    );
  }
}
AjouterMoto.defaultProps = { history: "/" };
