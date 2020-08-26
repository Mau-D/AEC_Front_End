import React from 'react';
import Button from 'react-bootstrap/Button';


export class Deconnexion extends React.Component {
    constructor(props) { 
        super(props);
        this.handledeconnect = this.handledeconnect.bind(this); 
    }

    handledeconnect(){
        this.props.onClick(false);
    }
    render() {
        return (
       
            <Button variant="primary" type="" onClick={this.handledeconnect}>
                            Déconnexion
            </Button>
       
        );
    }
    
};