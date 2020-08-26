import React from 'react';
//import logo from './logo.svg';
import './App.css';
function makeDoggy(e) { 

  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'); 
  
  e.target.setAttribute('alt', 'doggy'); 
  
  } 
  const kitty = ( 

    <img  
    
    src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg"  
    
    alt="kitty"  
    
    onClick={makeDoggy} 
    
    /> 
    
    ); 
    
function App() {
  return (
    kitty
    
  );

}

export default App;
