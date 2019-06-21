import React from 'react';
import './App.css';
import PageSelector from "./components/PageSelector";
import Header from "./components/Header";
import Grid from "@material-ui/core/Grid";
import PersistentDrawerLeft from "./components/Menu";
import ChangePagination from "./components/ChangePagination";


function App() {
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
