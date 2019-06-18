import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Computer from '@material-ui/icons/Computer';

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(3),
    },
}));

export default function InputSearch() {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.margin}>
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                        <Computer/>
                        <TextField id="input-with-icon-grid" label="Search"/>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}