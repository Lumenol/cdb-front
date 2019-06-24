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


const styles = theme => ({
    margin: {
        margin: theme.spacing(3),
    },
});


class PersistentDrawerLeft extends Component {

    render() {
        const {classes, isOpen, close, count} = this.props;
        return (
            <Drawer variant="persistent" anchor="left" open={isOpen}>
                <div>
                    <div className={classes.margin}>
                        {count} Ordinateurs trouvés

                        <IconButton onClick={close} style={{float: "right"}}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </div>
                </div>
                <Divider/>
                <div className={classes.margin}>
                    <InputSearch/>
                </div>
                <List className={classes.margin}>
                    <OrderBy/>
                    <SwitchDirection/>
                </List>
            </Drawer>
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
        }
    };
}

PersistentDrawerLeft.propTypes = {
    classes: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
};


export default PersistentDrawerLeft = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PersistentDrawerLeft));