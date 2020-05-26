import React from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




export class Deconnexion extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {

        this.props.onClick(false);
    }

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