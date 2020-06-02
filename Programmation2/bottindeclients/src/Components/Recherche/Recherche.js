import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Component qui gère la recherche
export class Recherche extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    //Méthode, lors du click un props pour activer la recherche et un props pour le string entré
    handleClick() {
        const stringSearch = document.getElementById("formSearch").value;
        this.props.onClick(stringSearch);
        this.props.recherche(true);
    }
    //Retourne le formulaire de recherche et un bouton pour lancer la recherche avec un événement onClick
    render() {
        return (
                <Col md={12} lg={6} className="mt-5">
                    <Form>
                        <Form.Group controlId="formSearch" >
                            <Form.Control type="search" placeholder="Rechercher un client" />
                            <Form.Text className="text-muted">
                                Appuyer sur le bouton pour afficher les clients
                     </Form.Text>
                        </Form.Group>
                        <Button className="silverButton  border-dark"  type="submit" onClick={this.handleClick}>
                            Recherche
                </Button>
                    </Form>
                </Col>
        )

    }

};