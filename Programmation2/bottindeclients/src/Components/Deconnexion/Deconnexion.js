import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Component pour se déconnecter de la recherche => retourner au bottin
export class Deconnexion extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    //Méthode lors du clic envoie un props=false=>changer le mode d'affichage (modeRecherche)
    handleClick() {
        this.props.onClick(false);
    }
//Retourne un bouton avec un événement onClick
    render() {
        return (
            <Row>
                <Col sm={6}>
                    <Button variant="primary" onClick={this.handleClick}>
                        Retour au bottin
                    </Button>
                </Col>
            </Row>
        );
    }
}