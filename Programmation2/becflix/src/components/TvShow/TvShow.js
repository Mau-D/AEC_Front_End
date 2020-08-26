import React from 'react';
//import serienoire from '../../img/serienoire.jpg'; PLus besoin avec le require un props de TvShow
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'


//Ajouter un état
export class TvShow extends React.Component {
    constructor(props){
        super(props);//ligne obligatoire, appelle le constructeur de la classe parent avec tous les arguments passés
        this.state = {hovered: false};//état hovered à true

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseOut = this.onMouseOut.bind(this);
    }
    //Méthode onMouseOver, change l'état de hovered à true
    //Méthode onMouseOut, change l'état de hoverd à false
    onMouseOver(){
        this.setState({hovered: true
        });
       
    }
    onMouseOut(){
        this.setState({hovered: false
        });
    }
    render() {
        return (
            //Dimension de l'image fluid lg-2
            //Style avec ternary operator
            <Col xs lg={2}>
                <Image
                    onMouseOver={this.onMouseOver}//événement qui appelle la fonction 
                    onMouseOut={this.onMouseOut}//événement qui appelle la fonction 
                    fluid
                    src={this.props.src}
                    alt={this.props.alt}
                    title={this.props.title}
                    style={{transform: `${this.state.hovered ? 'scale(1.5,1.5)' : 'scale(1,1)'}`}}
                />
            </Col>
        )
    }
};

