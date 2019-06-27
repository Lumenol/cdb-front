import React, {Fragment} from 'react';
import './App.css';
import PageSelector from "./components/PageSelector";
import Header from "./components/Header";
import Grid from "@material-ui/core/Grid";
import PersistentDrawerLeft from "./components/Menu";
import ChangePagination from "./components/ChangePagination";
import {useDispatch, useSelector} from "react-redux";
import {
    selectAddButton,
    selectIsConnected,
    selectMenuIsOpen,
    selectNotifications,
    selectUpdateButton,
    selectUserBecomeAnAdmin
} from "./redux/selectors";
import AddCard from "./components/AddCard";
import Router from "./components/Router";
import {useSnackbar} from "notistack";
import {clearNotifications} from "./redux/notification";
import {useTranslation} from "react-i18next";
import PageLogin from "./components/PageLogin";

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
    const open = useSelector(selectMenuIsOpen);
    const add = useSelector(selectAddButton);
    useNotifications();

    const update = useSelector(selectUpdateButton);
    const adminMode = useSelector(selectUserBecomeAnAdmin);
    const {t} = useTranslation();
    const dispatcher = useDispatch();

    const isConnected = useSelector(selectIsConnected);
    return isConnected ? (
            <Grid container direction="row" spacing={2}>

            <Grid item xs={12}><Header/></Grid>

                <Grid item xs={12} container spacing={3}>
                    <Grid item xs={12} container justify="center" className="margin" alignItems="center">
                        {!adminMode && (<ChangePagination/>)}
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
        (<PageLogin/>)
}

export default App;
