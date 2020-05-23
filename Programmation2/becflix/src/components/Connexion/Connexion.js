import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logobecflix from '../../img/logobecflix.png';



export class Connexion extends React.Component {
    constructor(props) {
        super(props);
        //this.state={email:'', password:''};//Valeurs des champs input du formulaire
        this.handleClick = this.handleClick.bind(this);

    }
    //Fonction ajoute un props au composant 
    handleClick() {
        let connecter = false;
        const email = document.getElementById('email').value;
        const password = document.getElementById("password").value;
        if (email === 'shany.carle@gmail.com' && password === 'patate')
            connecter = true;
        else
            connecter = false;

        this.props.onClick(connecter);
    }

    render() {
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
                </Row>
                <Row>
                    <Col>
                    <Form>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                    </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="" onClick={this.handleClick}>
                            Submit
                </Button>
                    </Form>
                    </Col>
                </Row>
            </Container>
        )

    }

};
