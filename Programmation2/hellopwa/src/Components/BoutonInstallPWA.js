import React from "react";
import { Button } from "react-bootstrap";

function BoutonInstallPWA() {
  return (
    <Button variant="primary" size="lg" block id="boutonInstall" hidden>
      Installer l'application
    </Button>
  );
}

export default BoutonInstallPWA;
