import React, {Component, Fragment} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {withTranslation} from "react-i18next";
import {
    selectAddButton,
    selectLanguage,
    selectMenuIsOpen,
    selectUpdateButton,
    selectUserBecomeAnAdmin,
    selectUserIsAdmin,
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
import {showCompanies, showComputers} from "../redux/router";
import {switchModeAdmin, switchModeUser} from "../redux/modeAdminIsActivate";
import AdminBar from "./AdminBar";
import Flag from 'react-world-flags'
import {setLanguage} from "../redux/i18n";
import {updateButton} from "../redux/updateButton";


class DenseAppBar extends Component {

    toggleAdd = () => {
        if (this.props.updateButton.boolean)
            return;
        this.props.add(!this.props.addButton);
    };

    toggleSwitchAdmin = () => {
        this.props.switchAdmin();
        this.props.update(false, null);
        this.props.add(false);
    };

    switchLanguage = () => {
        const l = this.props.language;
        switch (l) {
            case 'fr':
                this.props.changeLanguage('en');
                break;
            case 'en':
                this.props.changeLanguage('fr')

        }
    };

    render() {
        let button;
        const {t, isOpen, open, adminMode, switchUser, userName, isAdmin} = this.props;
        const style = adminMode ? "darkMode" : "orangeMode";
        const theme = adminMode ? darkMode : orangeTheme;

        if (isAdmin) {
            button = adminMode ?
                <Fragment><Fab size="small" color="secondary" title="Passer utilisateur" onClick={switchUser}>
                    <FontAwesomeIcon icon={faUser}/></Fab></Fragment>
                :
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


                                {adminMode ? null :
                                    <Grid item xs={2} md={4} lg={6}><IconButton aria-label="Menu" onClick={open}>
                                        <MenuIcon/>
                                    </IconButton></Grid>}

                                {adminMode ?
                                    <Grid item item xs={2} md={4} lg={6}><AdminBar className={darkMode}/></Grid> : null}

                                <Grid item xs={2} md={6} lg={8}>
                                    <ThemeProvider theme={whiteTheme}><Typography variant="h4"
                                                                                  color="primary"
                                                                                  fontFamily="Permanent Marker">
                                        <Box fontFamily="Permanent Marker"> {t("title.title")}</Box>
                                    </Typography></ThemeProvider>
                                </Grid>

                                <Grid item xs={2} md={2} lg={2} container>

                                    <Grid item xs={3} container alignItems="center">
                                        <Typography variant="h6" align="center" color="secondary"
                                                    fontFamily="Permanent Marker">
                                            <Box>{userName}</Box>
                                        </Typography>
                                    </Grid>


                                    {adminMode ? null : <Grid item xs={3} container alignItems="center">
                                        {!adminMode &&
                                        <Fab size="small" color="primary" aria-label="Add"
                                             title={t("header.hover.addButton")}
                                             onClick={this.toggleAdd}>
                                            <FontAwesomeIcon icon={faPlus}/>
                                        </Fab>}
                                    </Grid>}

                                    <Grid item xs={3} container alignItems="center">
                                        {button}
                                    </Grid>

                                    <Grid item xs={3} container alignItems="center">
                                        <DisconnectButton/>
                                    </Grid>

                                </Grid>

                                <Grid item xs={1} onClick={this.switchLanguage}>
                                    {
                                        this.props.language === 'fr' ?
                                            <Flag code="fr" height='16'/> :
                                            <Flag code="gb" height='16'/>
                                    }
                                </Grid>

                            </Toolbar>
                        </div>
                    </Paper>

                </Grid>
            </ThemeProvider>
        );
    }


}

function mapStateToProps(state) {
    return {
        isOpen: selectMenuIsOpen(state),
        addButton: selectAddButton(state),
        updateButton: selectUpdateButton(state),
        adminMode: selectUserBecomeAnAdmin(state),
        isAdmin: selectUserIsAdmin(state),
        userName: selectUsername(state),
        language: selectLanguage(state)
    }
}


function mapDispatchToProps(dispatch) {
    return {
        changeLanguage: (lang) => {
            dispatch(setLanguage(lang))
        },
        open: () => {
            dispatch(openMenu());
        },
        add: (boolean) => {
            dispatch(addButton(boolean));
        },
        switchAdmin: () => {
            dispatch(closeMenu());
            dispatch(showCompanies());
            dispatch(switchModeAdmin());
        },
        switchUser: () => {
            dispatch(showComputers());
            dispatch(switchModeUser());
        },
        update: (boolean, computer) => {
            dispatch(updateButton(boolean, computer));
        }
    };
}

const Translation = withTranslation()(DenseAppBar);
export default DenseAppBar = connect(mapStateToProps, mapDispatchToProps)(Translation);
