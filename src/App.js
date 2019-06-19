import React from 'react';
import './App.css';
import {getToken} from "./api/connection";
import Button from "@material-ui/core/Button";
import DisconnectButton from "./components/DisconectButton";

function App() {
    return (
        <>
            <Button color="primary" onClick={() => getToken('user', 'user')}>
                Bonjour
            </Button>
            < DisconnectButton/>
        </>
    );
}

export default App;
