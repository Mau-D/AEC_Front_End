import React, { Component } from "react";
import { withRouter } from "react-router-dom";
//Component pour revenir en haut de la page lors du changement d'affichage

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return <React.Fragment />;
  }
}

export default withRouter(ScrollToTop);
