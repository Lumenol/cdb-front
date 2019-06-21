import React from 'react';
import './App.css';
import ConnectButton from "./components/DisconectButton";
import PersistentDrawerLeft from './components/Menu';
import PageSelector from "./components/PageSelector";

function App() {
    return (
        <div className="App">
            <ConnectButton/>
            <PersistentDrawerLeft/>
            <PageSelector/>
        </div>
    );
}

export default App;
