import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




export class Recherche extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const rechercher = true;
        const stringSearch = document.getElementById("formSearch").value;
        this.props.onClick(stringSearch);
        this.props.recherche(rechercher);
    }
    render() {
        return (
            <Row>
                <Col xs={6}>
                    <Form>
                        <Form.Group controlId="formSearch" >
                            <Form.Control type="search" placeholder="Rechercher un client" />
                            <Form.Text className="text-muted">
                                Appuyer sur le bouton pour afficher les clients
                     </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={this.handleClick}>
                            Recherche
                </Button>
                    </Form>
                </Col>
            </Row>
        )

    }

};