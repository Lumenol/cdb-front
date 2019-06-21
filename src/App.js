import React, {useEffect} from 'react';
import './App.css';
import PageSelector from "./components/PageSelector";
import Header from "./components/Header";
import Grid from "@material-ui/core/Grid";
import PersistentDrawerLeft from "./components/Menu";
import ChangePagination from "./components/ChangePagination";
import {useStore} from "react-redux";
import {getComputers} from "./redux/computers";
import {selectIsConnected, selectSearchParameters} from "./redux/selectors";
import ComputerContainer from './containers/CardContainer';

function updateComputerIfSearchParametersHasChangeOrLogin(store) {
    const TIMEOUT = 300;
    const handler = () => store.dispatch(getComputers());

    let oldSearchParameters;
    let timer;

    function update() {
        const state = store.getState();
        const searchParameters = selectSearchParameters(state);
        const isConnected = selectIsConnected(state);
        if (isConnected) {
            if (searchParameters !== oldSearchParameters) {
                oldSearchParameters = searchParameters;

                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(handler, TIMEOUT);
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

            <Grid item xs={12} container justify="center">
                <Grid item xs={12} container justify="center"><ChangePagination/></Grid>
                <Grid item xs={10} className="card_container"><ComputerContainer/></Grid>
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
