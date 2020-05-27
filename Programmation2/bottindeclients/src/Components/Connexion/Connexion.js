import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Component pour la connexion à l'aide d'un mot de passe
export class Connexion extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    //Fonction ajoute un props au composant pour le bouton connexion selon le mot de passe entré
    handleClick() {
        let connecter = false;
        const password = document.getElementById("password").value;
        if (password === 'Alibaba')
            connecter = true;
        else
            connecter = false;

        this.props.onClick(connecter);
    }
//Retourne un formulaire pour l'entré du mot de passe
    render() {
        return (
            <Container fluid className="mx-0">
                <Row className="mx-2 text-center">
                    <Col>
                        <h1>Bottin de clients</h1>
                        <p>Connexion</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="password">
                                <Form.Label>Mot de passe</Form.Label>
                                <Form.Control type="password" placeholder="Mot de passe" />
                                <Form.Text className="text-muted">
                                    Entrer le mot de passe pour vous connecter
                                </Form.Text>
                                <Button variant="primary" type="" onClick={this.handleClick}>
                                    Connexion
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )

    }

};

