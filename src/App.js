import React from 'react';
import './App.css';
import PersistentDrawerLeft from './components/Menu';
import PageSelector from "./components/PageSelector";
import DisconnectButton from "./components/DisconectButton";

function App() {
    return (
        <div className="App">
            <DisconnectButton/>
            <PersistentDrawerLeft/>
            <PageSelector/>
        </div>
    );
}

export default App;
