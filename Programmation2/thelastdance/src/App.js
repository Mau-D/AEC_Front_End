import React from 'react';
import './App.css';
import netflixlogo from './images/netflix.png'

  

function App() {
  const texteAfficher=(
    <div>
      <h1>THE LAST DANCE</h1>
      <p>Une production de</p>
      <img src={netflixlogo} alt='Netflix'/>
      <p>Mettant en vedette</p>
    </div>
  );
  return (
   
    
      texteAfficher
    
  );
}

export default App;
