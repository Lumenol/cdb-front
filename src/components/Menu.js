import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SwitchDirection from "./SwitchDirection";
import OrderBy from "./OrderBy";
import InputSearch from "./InputSearch";
import {selectComputerCount, selectMenuIsOpen} from "../redux/selectors";
import {connect} from "react-redux";
import {closeMenu} from "../redux/menuIsOpen";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "../paletteBis";
import {withTranslation} from "react-i18next";
import Button from "@material-ui/core/Button";
import {setShow, SHOW} from "../redux/router";


const styles = theme => ({
    margin: {
        margin: theme.spacing(3),
    },
});


class PersistentDrawerLeft extends Component {

    render() {
        const {classes, isOpen, close, count, t, showCompanies, showComputers} = this.props;
        return (
            <ThemeProvider theme={theme}>
                <Drawer variant="persistent" anchor="left" open={isOpen}>
                    <div>
                        <div className={classes.margin}>
                            <Typography color="primary" variant="h6"> {count} {t("computer.found")}</Typography>

                            <IconButton onClick={close} style={{float: "right"}}>
                                <ChevronLeftIcon/>
                            </IconButton>
                        </div>
                    </div>
                    <Divider/>
                    <List className={classes.margin}>
                        <Button variant="contained" color="primary" onClick={showCompanies}>{t("companies")}
                        </Button>

                        <Button variant="contained" color="primary" onClick={showComputers}>{t("computers")}
                        </Button>
                    </List>


                    <Divider/>
                    <div className={classes.margin}>
                        <InputSearch/>
                    </div>
                    <List className={classes.margin}>
                        <OrderBy/>
                        <SwitchDirection/>
                    </List>
                </Drawer>
            </ThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    return {
        isOpen: selectMenuIsOpen(state),
        count: selectComputerCount(state)
    };
}


function mapDispatchToProps(dispatch) {
    return {
        close: () => {
            dispatch(closeMenu());
        },
        showCompanies: () => {
            dispatch(setShow(SHOW.COMPANIES))
        },
        showComputers: () => {
            dispatch(setShow(SHOW.COMPUTERS))
        }
    };
}

PersistentDrawerLeft.propTypes = {
    classes: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
};

const Translation = withTranslation()(PersistentDrawerLeft);
export default PersistentDrawerLeft = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Translation));
