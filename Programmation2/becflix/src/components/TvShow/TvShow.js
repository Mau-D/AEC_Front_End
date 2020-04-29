import React from 'react'; 
import serienoire from '../../img/serienoire.jpg';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'


let image = (
    <Image
    fluid
    src={serienoire}
    alt='La petite vie'
    title= 'La petite vie'
    />
);

export class TvShow extends React.Component {  
    render() {  
       return (
         <Col xs lg={2}>
             {image}
         </Col>  
       )
    }  
};  

 