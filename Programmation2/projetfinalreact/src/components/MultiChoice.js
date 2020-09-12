import React from "react";
import { Form, Button } from "react-bootstrap";
import FormAjoutAttraits from "./FormAjoutAttraits";
//Class pour ajouter un formulaire supplémentaire à l'ajout d'attraits
export class MultiChoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: ["input-0"],
      cliqueInfos: this.props.cliqueEnregistrer,
    };
    console.log(this.state.cliqueInfos);
    this.appendInput = this.appendInput.bind(this);
  }
  appendInput() {
    console.log("nouvel Attrait");

    var newInput = `input-${this.state.inputs.length}`;
    this.setState((prevState) => ({
      inputs: prevState.inputs.concat([newInput]),
    }));
  }
  render() {
    console.log(this.state.inputs);
    console.log("trip" + this.state.cliqueInfos);
    return (
      <>
        <div>
          <Form>
            <div id="dynamicInput">
              {this.state.inputs.map((input) => (
                <FormAjoutAttrait
                  key={input}
                  cliqueSave={this.state.cliqueInfos}
                />
              ))}
            </div>
          </Form>
          <Button variant="primary" type="submit" onClick={this.appendInput}>
            Ajouter un nouvel attrait touristique
          </Button>
        </div>
      </>
    );
  }
}
