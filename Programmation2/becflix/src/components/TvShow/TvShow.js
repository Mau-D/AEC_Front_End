import React from 'react';
//import serienoire from '../../img/serienoire.jpg'; PLus besoin avec le require un props de TvShow
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'



export class TvShow extends React.Component {
    render() {
        return (
            //Dimension de l'image fluid lg-2
            <Col xs lg={2}>
                <Image
                    fluid
                    src={this.props.src}
                    alt={this.props.alt}
                    title={this.props.title}
                />
            </Col>
        )
    }
};

