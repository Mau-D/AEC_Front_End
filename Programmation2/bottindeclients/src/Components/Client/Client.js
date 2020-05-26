import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';



export class Client extends React.Component {

    render() {
        return (
            <Col xs={12} sm={6} md={4} lg={4} xl={2} className="mt-4" >
                <Card style={{ width: '14rem', verticalAlign: 'middle'}} >
                    <Card.Img variant="top" src={this.props.photo} style={{ height: '200px' }}/>
                    <Card.Body>
                        <Card.Title>{this.props.nom}</Card.Title>
                        <Card.Subtitle style={{fontSize:'0.8rem' }}>{this.props.profession}</Card.Subtitle>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem style={{fontSize:'0.8rem' }}>Courriel: {this.props.courriel}</ListGroupItem>
                        <ListGroupItem style={{fontSize:'0.8rem' }}>Téléphone: {this.props.tel}</ListGroupItem>
                        <ListGroupItem style={{fontSize:'0.8rem' }}>Adresse: {this.props.adresse}</ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
        )
    }
};
