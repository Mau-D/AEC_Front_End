import React from 'react';
import {Video} from './Video';
import {Menu} from './Menu';

//Variables des sources des vidéos
const VIDEOS = { 
    fast: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4', 
    slow: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4', 
    cute: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4', 
    eek: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4' 
}; 
//Component stateful Player, détermine la valeur du props de Menu et le state de Video
export class Player extends React.Component {
    constructor(props){
        super(props);
        this.state = {src:VIDEOS.fast};//L'état du component nom(src) valeur(VIDEOS.fast)
        this.chooseVideo = this.chooseVideo.bind(this);
    }
    //Fonction qui change l'état du component Player
    chooseVideo(newVideo){
        this.setState({ //Pour changer l'état
            src: VIDEOS[newVideo]
        });
    }//Affiche un titre, envoie la valeur du props de Menu et l'état de Video
    render(){
        return(
            <div>
                <h1>Video Player</h1>
                <Menu chooseVideo={this.chooseVideo}/>
                <Video src={this.state.src}/>
            </div>
        );
    }//Component Menu, la valeur (fast ou slow ou etc.) du props chooseVideo est envoyé à la fonction chooseVideo
    //Cette fonction change l'état Player avec le src de la variable objet VIDEOS.
    //Component Video, la valeur du props src=état du component Player
}