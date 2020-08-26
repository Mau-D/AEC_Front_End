import React from 'react';

//Component Menu stateless, le component Player lui donnera sa valeur avec la fonction chooseVideo
export class Menu extends React.Component {
    constructor(props) {
        super(props);//ligne obligatoire pour le state

        this.handleClick = this.handleClick.bind(this);//Nécessaire pour utiliser le this dans la fonction
    }
    //Fonction associé à un événement d'un clic sur un bouton radio
    handleClick(e) {
        const name = e.target.value;//variable définit par le résultat de l'événement
        this.props.chooseVideo(name);//Props de Menu(chooseVideo = name)
    }
    render() {
        //Événement onClick, qui éxécute la fonction handleClick
        return (
            <form onClick={this.handleClick}>
                <input type="radio" name="src" value="fast" /> fast
                <input type="radio" name="src" value="slow" /> slow
                <input type="radio" name="src" value="cute" /> cute
                <input type="radio" name="src" value="eek" /> eek
            </form>

        );
    }
}