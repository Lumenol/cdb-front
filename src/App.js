import React, {Fragment, useEffect} from 'react';
import './App.css';
import PageSelector from "./components/PageSelector";
import Header from "./components/Header";
import Grid from "@material-ui/core/Grid";
import PersistentDrawerLeft from "./components/Menu";
import ChangePagination from "./components/ChangePagination";
import {useDispatch, useSelector, useStore} from "react-redux";
import {getComputers, getCountComputers} from "./redux/computers";
import {
    selectAddButton,
    selectIsConnected,
    selectMenuIsOpen,
    selectSearchParameters,
    selectUserBecomeAnAdmin
} from "./redux/selectors";
import ThemeProvider from "@material-ui/styles/ThemeProvider/ThemeProvider";
import theme from "./paletteBis";
import AddCard from "./components/AddCard";
import Router from "./components/Router";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import {setShow, SHOW} from "./redux/router";
import {useTranslation} from "react-i18next";

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

function showComputers() {
    return setShow(SHOW.COMPUTERS);
}

function showCompanies() {
    return setShow(SHOW.COMPANIES);
}

function App() {
    const store = useStore();
    const open = useSelector(selectMenuIsOpen);
    const add = useSelector(selectAddButton);
    const adminMode = useSelector(selectUserBecomeAnAdmin);
    const {t} = useTranslation();
    useEffect(() => updateComputerIfSearchParametersHasChangeOrLogin(store));
    const dispatcher = useDispatch();

    return (
        <Grid container direction="row" spacing={2}>

            <Grid item xs={12}><ThemeProvider theme={theme}><Header/></ThemeProvider></Grid>


            <Grid item xs={12} container spacing={3}>
                <Grid item xs={12} container justify="center" className="margin" alignItems="center">
                    {!adminMode ? (<ChangePagination/> ) : (<List>
                    <Button variant="contained" color="primary" onClick={()=>dispatcher(showCompanies())}>{t("companies")}
                    </Button>


                </List>)}
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

            {!adminMode ?
                (<Grid item xs={12} container justify="center">
                <footer className="footer">
                    <PageSelector/>
                </footer>
            </Grid>) : null}
            <PersistentDrawerLeft/>
        </Grid>
    )
}

export default App;
