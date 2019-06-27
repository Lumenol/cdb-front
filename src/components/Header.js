import React, {Component} from 'react';
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
import theme from "../paletteBis";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import Fab from "@material-ui/core/Fab";
import {addButton} from "../redux/addButton";
import Button from "@material-ui/core/Button";
import {switchModeAdmin, switchModeUser} from "../redux/modeAdminIsActivate";
import {showCompanies, showComputers} from "../redux/router";
import Flag from 'react-world-flags'
import {setLanguage} from "../redux/i18n";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";


class DenseAppBar extends Component {

    toggleAdd = () => {
        if (this.props.updateButton.boolean)
            return;
        this.props.add(!this.props.addButton);
    };

    render() {
        let button;
        const {t, isOpen, open, adminMode, switchAdmin, switchUser, userName, isAdmin} = this.props;

        if (isAdmin) {
            if (adminMode) {
                button = <Button variant="contained" color="primary" title="Passer Utilisateur" onClick={switchUser}>USER
                </Button>
            } else {
                button = <Button variant="contained" color="primary" title="Passer Administrateur" onClick={switchAdmin}>ADMIN
                </Button>
            }
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

                            <Grid item xs={8}>
                                <Typography variant="h3" align="center" color="secondary" fontFamily="Permanent Marker">
                                    <Box fontFamily="Permanent Marker">Computer Database</Box>
                                </Typography>
                            </Grid>

                            <Grid item xs={2}>
                                {button}
                            </Grid>


                            <Grid item xs={2} container alignItems="center" justify="flex-end">
                                {!adminMode &&
                                <Fab size="small" color="primary" aria-label="Delete"
                                     title={t("header.hover.addButton")}
                                     onClick={this.toggleAdd}>
                                    <FontAwesomeIcon icon={faPlus}/>
                                </Fab>
                                }
                            </Grid>


                            <Grid item xs={1}>
                                <Typography variant="h6" align="center" color="secondary" fontFamily="Permanent Marker">
                                    <Box>{userName}</Box>
                                </Typography>

                            </Grid>

                            <Grid item xs={1}>
                                <DisconnectButton/>
                            </Grid>

                            <Grid item xs={1}>
                                {
                                    this.props.language === 'fr' ?
                                        <Flag code="fr" height='16'/> :
                                        <Flag code="gb" height='16'/>
                                }
                            </Grid>

                            <FormControl>
                                <NativeSelect
                                    onChange={(event) => this.props.changeLanguage(event.target.value)}
                                >
                                    <option value="fr">fr</option>
                                    <option value="en">en</option>
                                </NativeSelect>
                            </FormControl>


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
    };
}

const Translation = withTranslation()(DenseAppBar);
export default DenseAppBar = connect(mapStateToProps, mapDispatchToProps)(Translation);
