import React from 'react';

//Component video qui retourne une balise video html
export class Video extends React.Component {
    render(){
        return(
            <div>
                <video controls autostart autoPlay muted src={this.props.src}></video>
            </div>
        );
    }
}
//un props à Video est créé pour le src du vidéo joué