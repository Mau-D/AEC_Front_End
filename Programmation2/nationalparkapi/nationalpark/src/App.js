import React from 'react';
import logo from './logo.svg';
import './App.css';
//API key : nBIIIGWQTDzzrZoM0J9qwfPEVdqNvcPj6K1AZLCD
//exemple url:https://developer.nps.gov/api/v1/alerts?parkCode=acad&api_key=nBIIIGWQTDzzrZoM0J9qwfPEVdqNvcPj6K1AZLCD
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
