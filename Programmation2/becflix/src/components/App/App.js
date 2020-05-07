import React from 'react';
import '../App/App.css';//Changer l'emplacement du fichier App.css
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Catalogue } from '../Catalogue/Catalogue';
import logobecflix from '../../img/logobecflix.png';
import Image from 'react-bootstrap/Image'

//Logo fluide
let becflix =
  <Image
    fluid
    className="mt-2"
    src={logobecflix}
    alt='logo de becflix'
    title='becflix'
  />
function App() {
  return (
    //Container avec les différents conponents et les marges en x=0
    //En-tête avec le logo et le component (catalogue-->Categorie-->TvShow)
    //Le catalogue contient des rows, mais pas le logo
    <Container fluid className="mx-0">
      <Row className="mx-2">
        {becflix}
      </Row>
      <Catalogue />
    </Container>
  );
}

export default App;
