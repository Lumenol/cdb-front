import React from 'react';
import Switch from '@material-ui/core/Switch';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


export default function SwitchDirection() {

    const [state, setState] = React.useState({
        checkedA: true,
    });


    const handleChange = name => event => {
        setState({...state, [name]: event.target.checked});
    };

    return (
        <Typography component="div">
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

