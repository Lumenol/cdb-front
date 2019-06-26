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
    selectNotifications,
    selectSearchParameters,
    selectUpdateButton,
    selectUserBecomeAnAdmin
} from "./redux/selectors";
import ThemeProvider from "@material-ui/styles/ThemeProvider/ThemeProvider";
import theme from "./paletteBis";
import AddCard from "./components/AddCard";
import Router from "./components/Router";
import FormLogin from "./components/FormLogin";
import {useSnackbar} from "notistack";
import {clearNotifications} from "./redux/notification";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import {setShow, SHOW} from "./redux/router";
import {useTranslation} from "react-i18next";

function updateComputerIfSearchParametersHasChangeOrLogin() {
    const TIMEOUT = 300;

    let oldSearchParameters;
    let computerTimer;
    let countTimer;

    return function (store) {
        const computerHandler = () => {
            store.dispatch(getComputers())
        };
        const countHandler = () => {
            store.dispatch(getCountComputers())
        };

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
}

const refresh = updateComputerIfSearchParametersHasChangeOrLogin();

function showCompanies() {
    return setShow(SHOW.COMPANIES);
}

function useNotifications() {
    const notifications = useSelector(selectNotifications);
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();
    const dispatch = useDispatch();
    notifications.forEach(({message, options}) => {
            const key = enqueueSnackbar(message, options);
            setTimeout(() => closeSnackbar(key), 10000);
        }
    );
    if (notifications.length > 0) {
        dispatch(clearNotifications());
    }
}

function App() {
    const store = useStore();
    const open = useSelector(selectMenuIsOpen);
    const add = useSelector(selectAddButton);
    useEffect(() => refresh(store));
    useNotifications();

    const update = useSelector(selectUpdateButton);
    const adminMode = useSelector(selectUserBecomeAnAdmin);
    const {t} = useTranslation();
    const dispatcher = useDispatch();

    const isConnected = useSelector(selectIsConnected);
    return isConnected ? (
            <Grid container direction="row" spacing={2}>

                <Grid item xs={12}><ThemeProvider theme={theme}><Header/></ThemeProvider></Grid>

                <Grid item xs={12} container spacing={3}>
                    <Grid item xs={12} container justify="center" className="margin" alignItems="center">
                        {!adminMode ? (<ChangePagination/>) : (<List>
                            <Button variant="contained" color="primary"
                                    onClick={() => dispatcher(showCompanies())}>{t("companies")}
                            </Button>
                        </List>)}
                    </Grid>

                    {update.boolean ?
                        <AddCard computer={update.computer}/> : null}

                    {add ? <AddCard/> : null}

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
            </Grid>) :
        (<FormLogin/>)
}

export default App;
