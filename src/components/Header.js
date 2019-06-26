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
import theme from "../paletteBis";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faUser, faUserCog} from "@fortawesome/free-solid-svg-icons";
import Fab from "@material-ui/core/Fab";
import {addButton} from "../redux/addButton";
import {setShow, SHOW} from "../redux/router";
import {switchModeAdmin, switchModeUser} from "../redux/modeAdminIsActivate";


class DenseAppBar extends Component {

    toggleAdd = () => {
        if (this.props.updateButton.boolean)
            return;
        this.props.add(!this.props.addButton);
    };

    render() {
        let button;
        const {t, isOpen, open, adminMode, switchAdmin, switchUser, userName} = this.props;

        {
            adminMode ?
                button = <Fragment><Fab size="small" color="primary" title="Passer utilisateur" onClick={switchUser}>
                    <FontAwesomeIcon icon={faUser}/></Fab></Fragment>
                :
                button =
                    <Fragment><Fab size="small" color="primary" title="Passer administrateur" onClick={switchAdmin}>
                        <FontAwesomeIcon icon={faUserCog}/></Fab></Fragment>
        }

        return (
            <ThemeProvider theme={theme}>
                <Grid container direction="column">
                    <Paper position="static">
                        <Toolbar>

                            <Grid item xs={1}>
                                {!isOpen && (adminMode ? null : <IconButton aria-label="Menu" onClick={open}>
                                    <MenuIcon/>
                                </IconButton>)}
                            </Grid>

                            <Grid item xs={6} md={9} lg={9}>
                                <Typography variant="h4" align="center" color="secondary" fontFamily="Permanent Marker">
                                    <Box fontFamily="Permanent Marker"> {t("title.title")}</Box>
                                </Typography>
                            </Grid>

                            <Grid item xs={5} md={2} lg={2} container>

                                <Grid item xs={3} container alignItems="center">
                                    <Typography variant="h6" align="center" color="secondary"
                                                fontFamily="Permanent Marker">
                                        <Box>{userName}</Box>
                                    </Typography>
                                </Grid>


                                <Grid item xs={3} container alignItems="center">
                                    <Fab size="small" color="primary" aria-label="Add"
                                         title={t("header.hover.addButton")}
                                         onClick={this.toggleAdd}>
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </Fab>
                                </Grid>

                                <Grid item xs={3} container alignItems="center">
                                    {button}
                                </Grid>

                                <Grid item xs={3} container alignItems="center">
                                    <DisconnectButton/>
                                </Grid>

                            </Grid>


                        </Toolbar>
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
        userName: selectUsername(state)
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
