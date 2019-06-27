import React from "react";
import PropTypes from "prop-types";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import {useTranslation} from "react-i18next";

function TabContainer(props) {
    return (
        <Typography component="div" style={{padding: 8 * 3}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
};

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: "dark"
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const {t} = useTranslation();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div>
            <AppBar position="static" className={classes.root}>
                <Tabs value={value}
                      onChange={handleChange}
                >
                    <Tab label={t("companies")}/>
                    <Tab label={t("users")}/>
                </Tabs>
            </AppBar>
        </div>
    );
}