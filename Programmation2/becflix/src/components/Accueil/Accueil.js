import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Catalogue } from '../Catalogue/Catalogue';
import { Connexion } from '../Connexion/Connexion';

import logobecflix from '../../img/logobecflix.png';
import { Deconnexion } from '../Deconnexion/Deconnexion';


export class Accueil extends React.Component {
    constructor(props) {
        super(props);
        this.state = { connected: false };
        this.gestionConnexion = this.gestionConnexion.bind(this);
        this.changeState = this.changeState.bind(this);
    }

    changeState(etat) {
        this.setState({ connected: etat });
    }
    gestionConnexion() {
        if (this.state.connected) {
            return (
                <Container fluid className="mx-0">
                    <Row className="mx-2">
                        <Col>
                            <Image
                                fluid
                                className="mt-2"
                                src={logobecflix}
                                alt='logo de becflix'
                                title='becflix'
                            />
                        </Col>
                        <Col className="text-right">
                            <Deconnexion onClick={this.changeState}/>
                        </Col>
                    </Row>
                    <Catalogue />
               
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
