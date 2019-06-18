import React from 'react';
import Switch from '@material-ui/core/Switch';
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(3),
    },
}));

export default function SwitchDirection() {
    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedA: true,
    });


    const handleChange = name => event => {
        setState({...state, [name]: event.target.checked});
    };

    return (
        <Typography component="div" className={classes.margin}>
            <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>Asc</Grid>
                <Grid item>
                    <Switch
                        checked={state.checkedA}
                        onChange={handleChange('checkedA')}
                        value="checkedA"
                    />
                </Grid>
                <Grid item>Desc</Grid>
            </Grid>
        </Typography>
    );
}

