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
import Box from "@material-ui/core/Box";
import theme from "../paletteBis";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import Fab from "@material-ui/core/Fab";
import {addButton} from "../redux/addButton";


class DenseAppBar extends Component {

    toggleAdd = () => {
        this.props.add();
    };

    render() {

        const {t, isOpen, open} = this.props;
        return (
            <ThemeProvider theme={theme}>
                <Grid container direction="column">
                    <Paper position="static">
                        <Toolbar>

                            <Grid item xs={1}>
                                {!isOpen && <IconButton aria-label="Menu" onClick={open}>
                                    <MenuIcon/>
                                </IconButton>}
                            </Grid>

                            <Grid item xs={9}>
                                <Typography variant="h3" align="center" color="secondary" fontFamily="Permanent Marker">
                                    <Box fontFamily="Permanent Marker"> Computer database </Box>
                                </Typography>
                            </Grid>


                            <Grid item xs={1} container alignItems="center" justify="flex-end">
                                <Fab size="small" color="primary" aria-label="Delete" title="Ajouter ordinateur">
                                    <FontAwesomeIcon icon={faPlus} onClick={this.toggleAdd}></FontAwesomeIcon>
                                </Fab>
                            </Grid>

                            <Grid item xs={1}>
                                <DisconnectButton/>
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
        isOpen: selectMenuIsOpen(state)
    }
}


function mapDispatchToProps(dispatch) {
    return {
        open: () => {
            dispatch(openMenu());
        },
        add: () => {
            dispatch(addButton(true));
        }
    };
}

const Translation = withTranslation()(DenseAppBar);
export default DenseAppBar = connect(mapStateToProps, mapDispatchToProps)(Translation);