import React from 'react';
import logo from './logo.svg';
import './App.css';
import ConnectButton from "./components/ConnectButton";
import PersistentDrawerLeft from './components/Menu';
import PageSelector from "./components/PageSelector";

function App() {
  return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
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
          <ConnectButton/>
          <PersistentDrawerLeft/>
          <PageSelector/>
      </div>
  );
}

export default App;
