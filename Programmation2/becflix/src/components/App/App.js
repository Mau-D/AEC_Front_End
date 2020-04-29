import React from 'react';
import '../App/App.css';//Changer l'emplacement du fichier App.css
import Container from 'react-bootstrap/Container'
import { Catalogue } from '../Catalogue/Catalogue';
import logobecflix from '../../img/logobecflix.png';

//Logo fluide, mettre fluide au besoin voir TvShow
let becflix =
  <img
    src={logobecflix}
    alt='logo de becflix'
    title='becflix'
  />
function App() {
  return (
    //Container avec les différents conponents et les marges en x=0
    //En-tête avec le logo et le component (catalogue-->Categorie-->TvShow)
    <Container fluid className="mx-0">
      <header>
        {becflix}
      </header>
      <Catalogue />
    </Container>
  );
}

export default App;
