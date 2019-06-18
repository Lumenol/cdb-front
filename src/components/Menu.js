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


const styles = theme => ({
    margin: {
        margin: theme.spacing(3),
    },
});


class PersistentDrawerLeft extends Component {

    constructor(props) {
        super(props);
        this.state = {open: true};
    }

    handleDrawerClose = () => {
        this.setState({open: false});
    };

    render() {
        const {classes} = this.props;
        const {open} = this.state;
        return (
            <Drawer variant="persistent" anchor="left" open={open}>
                <div>
                    <IconButton onClick={this.handleDrawerClose} style={{float: "right"}}>
                        <ChevronLeftIcon/>
                    </IconButton>
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


export default PersistentDrawerLeft = withStyles(styles)(PersistentDrawerLeft);