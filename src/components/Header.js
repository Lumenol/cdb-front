import React, {Component} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {withTranslation} from "react-i18next";
import {selectMenuIsOpen} from "../redux/selectors";
import {connect} from "react-redux";
import {openMenu} from "../redux/menuIsOpen";
import Paper from "@material-ui/core/Paper";
import DisconnectButton from "./DisconectButton";
import Grid from "@material-ui/core/Grid";
import {setShow, SHOW} from "../redux/router";
import Button from "@material-ui/core/Button";


class DenseAppBar extends Component {


    render() {
        const {t, isOpen, open, showCompanies, showComputers} = this.props;
        return (
            <Grid container direction="column">
                <Paper position="static">
                    <Toolbar variant="dense">

                        <Grid item xs={1}>
                            {!isOpen && <IconButton edge="start" color="inherit" aria-label="Menu" onClick={open}>
                                <MenuIcon/>
                            </IconButton>}

                        </Grid>

                        <Grid item xs={6}>
                            <Typography variant="h6" color="inherit" align="center">
                                {t("title.title")}
                            </Typography>
                        </Grid>

                        <Grid item xs={2}>
                            <Button variant="contained" color="primary" onClick={showCompanies}>{t("companies")}
                            </Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained" color="primary" onClick={showComputers}>{t("computers")}
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <DisconnectButton/>
                        </Grid>


                    </Toolbar>
                </Paper>

            </Grid>
        )
            ;
    }
}

function mapStateToProps(state) {
    return {
        isOpen: selectMenuIsOpen(state)
    }
}


function mapDispatchToProps(dispatch) {
    return {
        open: () => {
            dispatch(openMenu());
        },
        showCompanies: () => {
            dispatch(setShow(SHOW.COMPANIES))
        },
        showComputers: () => {
            dispatch(setShow(SHOW.COMPUTERS))
        }

    };
}

const Translation = withTranslation()(DenseAppBar);
export default DenseAppBar = connect(mapStateToProps, mapDispatchToProps)(Translation);