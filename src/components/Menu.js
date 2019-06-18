import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SwitchDirection from "./SwitchDirection";
import OrderBy from "./OrderBy";
import InputSearch from "./InputSearch";


const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(3),
    },
}));


export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    function handleDrawerClose() {
        setOpen(true);
    }

    return (
        <div>
            <Drawer
                variant="persistent"
                anchor="left"
                open={open}
            >
                <div>
                    <IconButton onClick={handleDrawerClose} style={{float: "right"}}>
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

        </div>

    );
}
