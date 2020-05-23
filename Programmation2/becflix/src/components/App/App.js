import React from 'react';
import '../App/App.css';//Changer l'emplacement du fichier App.css
import { Accueil } from '../Accueil/Accueil';


  function App() {
    return (
      //Container avec les différents conponents et les marges en x=0
      //En-tête avec le logo et le component (catalogue-->Categorie-->TvShow)
      //Le catalogue contient des rows, mais pas le logo
     
        <Accueil />
    );
  }

export default App;
