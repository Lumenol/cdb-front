import React, {Component} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PersistentDrawerLeft from "./Menu";
import {withTranslation} from "react-i18next";
import {selectMenuIsOpen} from "../redux/selectors";
import {connect} from "react-redux";
import {openMenu} from "../redux/menuIsOpen";
import Paper from "@material-ui/core/Paper";


class DenseAppBar extends Component {


    render() {
        const {t, isOpen, open} = this.props;
        return (
            <div>
                <Paper position="static">
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="Menu">
                            <MenuIcon onClick={open}/>
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                            {t("title.title")}
                        </Typography>
                    </Toolbar>
                </Paper>
                <PersistentDrawerLeft/>
            </div>
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
        }
    };
}

const Translation = withTranslation()(DenseAppBar);
export default DenseAppBar = connect(mapStateToProps, mapDispatchToProps)(Translation);