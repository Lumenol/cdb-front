import React, {Fragment, useEffect} from 'react';
import './App.css';
import PageSelector from "./components/PageSelector";
import Header from "./components/Header";
import Grid from "@material-ui/core/Grid";
import PersistentDrawerLeft from "./components/Menu";
import ChangePagination from "./components/ChangePagination";
import {useSelector, useStore} from "react-redux";
import {getComputers, getCountComputers} from "./redux/computers";
import {selectAddButton, selectIsConnected, selectMenuIsOpen, selectSearchParameters} from "./redux/selectors";
import ThemeProvider from "@material-ui/styles/ThemeProvider/ThemeProvider";
import theme from "./paletteBis";
import AddCard from "./components/AddCard";
import Router from "./components/Router";
import FormLogin from "./components/FormLogin";

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
    const open = useSelector(selectMenuIsOpen);
    const add = useSelector(selectAddButton);
    useEffect(() => updateComputerIfSearchParametersHasChangeOrLogin(store));

    const isConnected = useSelector(selectIsConnected);
    return (
        <div>
            {isConnected ?
                <Grid container direction="row" spacing={2}>

                    <Grid item xs={12}><ThemeProvider theme={theme}><Header/></ThemeProvider></Grid>


                    <Grid item xs={12} container spacing={3}>
                        <Grid item xs={12} container justify="center" className="margin" alignItems="center">
                            <ChangePagination/>
                        </Grid>

                        {
                            add ? <Grid item xs={12} container justify="center"><AddCard/></Grid> : null
                        }

                        <Grid item xs={12} container justify="center">
                            {open ? <Fragment><Grid item xs={4} md={4} lg={2}></Grid>
                                    <Grid item xs={7} md={7} lg={9} className="card_container"><Router/></Grid></Fragment>
                                : <Grid item xs={11} className="card_container"><Router/></Grid>}

                        </Grid>
                    </Grid>

                    <Grid item xs={12} container justify="center">
                        <footer className="footer">
                            <PageSelector/>
                        </footer>
                    </Grid>
                    <PersistentDrawerLeft/>
                </Grid> :
                <FormLogin></FormLogin>
            }
        </div>
    )
}

export default App;
