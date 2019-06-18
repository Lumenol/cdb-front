import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


export default function InputSearch() {
    return (
        <div>
            <Grid container spacing={1} alignItems="flex-end">
                <Grid item>
                    <TextField id="input-with-icon-grid" label="Search"/>
                </Grid>
            </Grid>
        </div>
    );
}