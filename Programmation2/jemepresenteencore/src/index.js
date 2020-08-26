import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import photo from './photo_cv_mini.png';
const presentation =(
  <div>
    <h1 className='rouge'>Maud Harvey</h1>
    <img src={photo} alt='Maud Harvey'></img><br/>
    <a href='https://mau-d.github.io/AEC_Front_End/Integration1/ProjetFinal/'>Lien vers mon GitHub</a>
    <ul>
      <li>La programmation</li>
      <li>Les sciences et les technologies</li>
      <li>L'artisanat</li>
      <li>Le plein-air</li>
    </ul>
    <p>
      Je me présente, Maud Harvey, je suis étudiante dans le programme de Developpement Web Front-End.<br/>
      Je m'intéresse aux sciences et aux technologies, mais j'aime bien créer grâce à l'artisanat.<br/>
      Ma vie ne serait pas combler sans mes sorties en plein-air avec ma famille, mes amies et surtout<br/>
      mon fidèle compagnon Jack, un border collie de 3 ans.<br/>
      Dans un avenir rapproché, je fonderai un agence web avec ma soeur jumelle adorée, Melody.
    </p>
  </div>
);

ReactDOM.render(
  presentation,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
