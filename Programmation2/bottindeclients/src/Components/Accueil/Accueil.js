import React from 'react';
import { BottinClients } from '../BottinClients/BottinClients';
import { Connexion } from '../Connexion/Connexion';
import Container from 'react-bootstrap/Container';




export class Accueil extends React.Component {
    constructor(props) {
        super(props);
        this.state = { connected: true };
        this.gestionConnexion = this.gestionConnexion.bind(this);
        this.changeState = this.changeState.bind(this);

    }

    changeState(etat) {
        this.setState({ connected: etat });
    };
    gestionConnexion() {
        if (this.state.connected) {
            return (
                <Container fluid className="mx-0">
                   
                    
                        <BottinClients />
                    

                </Container>

            );
        }
        else {
            return (
                <Connexion onClick={this.changeState} />
            );
        }
    };
    render() {
        return (
            this.gestionConnexion()
        )

    }
};