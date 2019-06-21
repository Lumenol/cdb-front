import React, {useEffect} from 'react';
import './App.css';
import PageSelector from "./components/PageSelector";
import Header from "./components/Header";
import Grid from "@material-ui/core/Grid";
import PersistentDrawerLeft from "./components/Menu";
import ChangePagination from "./components/ChangePagination";
import {useStore} from "react-redux";
import {getComputers, getCountComputers} from "./redux/computers";
import {selectIsConnected, selectSearchParameters} from "./redux/selectors";

function updateComputerIfSearchParametersHasChangeOrLogin(store) {
    const TIMEOUT = 300;
    const computerHandler = () => {
        store.dispatch(getComputers())
    };
    const countHandler = () => {
        store.dispatch(getCountComputers())
    };

    let oldSearchParameters;
    let computerTimer;
    let countTimer;

    function update() {
        const state = store.getState();
        const searchParameters = selectSearchParameters(state);
        const isConnected = selectIsConnected(state);
        if (isConnected) {
            if (searchParameters !== oldSearchParameters) {
                if (!oldSearchParameters || searchParameters.search !== oldSearchParameters.search) {
                    if (countTimer) {
                        clearTimeout(countTimer);
                    }
                    countTimer = setTimeout(countHandler, TIMEOUT);
                }
                if (computerTimer) {
                    clearTimeout(computerTimer);
                }
                computerTimer = setTimeout(computerHandler, TIMEOUT);
                oldSearchParameters = searchParameters;
            }
        } else {
            oldSearchParameters = undefined;
        }
    }

    return store.subscribe(update);
}

function App() {
    const store = useStore();
    useEffect(() => updateComputerIfSearchParametersHasChangeOrLogin(store));
    return (
        <Grid container direction="row" spacing={2}>
            <Grid item xs={12}><Header/></Grid>

            <Grid item xs={12} container justify="center" alignItems="flex-end">
                <ChangePagination/>

            </Grid>

            <Grid item xs={12} container justify="center">
                <footer className="footer">
                    <PageSelector/>
                </footer>
            </Grid>
            <PersistentDrawerLeft/>
        </Grid>
    )
}

export default App;
