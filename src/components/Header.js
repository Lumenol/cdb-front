import React, {Component, Fragment} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {withTranslation} from "react-i18next";
import {
    selectAddButton,
    selectMenuIsOpen,
    selectUpdateButton,
    selectUserBecomeAnAdmin,
    selectUsername
} from "../redux/selectors";
import {connect} from "react-redux";
import {closeMenu, openMenu} from "../redux/menuIsOpen";
import Paper from "@material-ui/core/Paper";
import DisconnectButton from "./DisconectButton";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import orangeTheme from "../paletteBis";
import darkMode from "../darkPalette";
import whiteTheme from "../whitePalette";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faUser, faUserCog} from "@fortawesome/free-solid-svg-icons";
import Fab from "@material-ui/core/Fab";
import {addButton} from "../redux/addButton";
import {setShow, SHOW} from "../redux/router";
import {switchModeAdmin, switchModeUser} from "../redux/modeAdminIsActivate";
import AdminBar from "./AdminBar";

function TabContainer(props) {
    return (
        <Typography component="div" style={{padding: 8 * 3}}>
            {props.children}
        </Typography>
    );
}

class DenseAppBar extends Component {

    toggleAdd = () => {
        if (this.props.updateButton.boolean)
            return;
        this.props.add(!this.props.addButton);
    };

    toggleSwitchAdmin = () => {
        if (this.props.addButton || this.props.updateButton.boolean)
            return;
        this.props.switchAdmin();
    };

    render() {
        let button;
        let tabs;
        const {t, isOpen, open, adminMode, switchAdmin, switchUser, userName} = this.props;
        const style = adminMode ? "darkMode" : "orangeMode";
        const theme = adminMode ? darkMode : orangeTheme;

        {
            adminMode ?
                button = <Fragment><Fab size="small" color="secondary" title="Passer utilisateur" onClick={switchUser}>
                    <FontAwesomeIcon icon={faUser}/></Fab></Fragment>
                :
                button =
                    <Fragment><Fab size="small" color="primary" title="Passer administrateur"
                                   onClick={this.toggleSwitchAdmin}>
                        <FontAwesomeIcon icon={faUserCog}/></Fab></Fragment>
        }

        return (
            <ThemeProvider theme={theme}>
                <Grid container direction="column">
                    <Paper position="static">
                        <div className={style}>
                            <Toolbar>


                                {!isOpen && (adminMode ? null :
                                    <Grid item xs={3}><IconButton aria-label="Menu" onClick={open}>
                                        <MenuIcon/>
                                    </IconButton></Grid>)}

                                {adminMode ? <Grid item xs={3}><AdminBar className={darkMode}/></Grid> : null}

                                <Grid item xs={6} md={9} lg={9}>
                                    <ThemeProvider theme={whiteTheme}><Typography variant="h4" align="center"
                                                                                  color="primary"
                                                                                  fontFamily="Permanent Marker">
                                        <Box fontFamily="Permanent Marker"> {t("title.title")}</Box>
                                    </Typography></ThemeProvider>
                                </Grid>

                                <Grid item xs={5} md={2} lg={2} container>

                                    <Grid item xs={3} container alignItems="center">
                                        <Typography variant="h6" align="center" color="secondary"
                                                    fontFamily="Permanent Marker">
                                            <Box>{userName}</Box>
                                        </Typography>
                                    </Grid>


                                    {adminMode ? null : <Grid item xs={3} container alignItems="center">
                                        <Fab size="small" color="primary" aria-label="Add"
                                             title={t("header.hover.addButton")}
                                             onClick={this.toggleAdd}>
                                            <FontAwesomeIcon icon={faPlus}/>
                                        </Fab>
                                    </Grid>}

                                    <Grid item xs={3} container alignItems="center">
                                        {button}
                                    </Grid>

                                    <Grid item xs={3} container alignItems="center">
                                        <DisconnectButton/>
                                    </Grid>

                                </Grid>


                            </Toolbar>
                        </div>
                    </Paper>

                </Grid>
            </ThemeProvider>
        )
            ;
    }
}

function mapStateToProps(state) {
    return {
        isOpen: selectMenuIsOpen(state),
        addButton: selectAddButton(state),
        updateButton: selectUpdateButton(state),
        adminMode: selectUserBecomeAnAdmin(state),
        userName: selectUsername(state),
    }
}


function mapDispatchToProps(dispatch) {
    return {
        open: () => {
            dispatch(openMenu());
        },
        add: (boolean) => {
            dispatch(addButton(boolean));
        },
        switchAdmin: () => {
            dispatch(closeMenu());
            dispatch(setShow(SHOW.COMPANIES));
            dispatch(switchModeAdmin());
        },
        switchUser: () => {
            dispatch(setShow(SHOW.COMPUTERS));
            dispatch(switchModeUser());
        },
    };
}

const Translation = withTranslation()(DenseAppBar);
export default DenseAppBar = connect(mapStateToProps, mapDispatchToProps)(Translation);
