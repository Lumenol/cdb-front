import React from 'react';
import './App.css';
import PersistentDrawerLeft from './components/Menu';
import PageSelector from "./components/PageSelector";
import DisconnectButton from "./components/DisconectButton";
import Slider from "./components/ChangePagination";


function App() {
    return (
        <div>
            <DisconnectButton/>
            <PersistentDrawerLeft/>
            <PageSelector/>
            <Slider/>
        </div>
    );
}

export default App;
