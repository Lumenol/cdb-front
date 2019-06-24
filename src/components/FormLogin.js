import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import {login} from "../redux/connection";


const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
});


class FormLogin extends Component {

    state = {
        login: "",
        password: ""
    };

    onInputOnLogin = (event) => {
        this.setState(
            {
                login: event.target.value
            }
        )
    };

    onInputOnPassword = (event) => {
        this.setState(
            {
                password: event.target.value
            }
        )
    };

    onSubmit = () => {
        login(this.state.login, this.state.password);
    };

    render() {
        const {classes} = this.props;

        return (
            <div>
                <FormControl>
                    <TextField
                        id="standard-search"
                        label="Login"
                        type="search"
                        className={classes.textField}
                        margin="normal"
                        value={this.state.login}
                        onChange={this.onInputOnLogin}
                    />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        onChange={this.onInputOnPassword}
                    />
                    <Button variant="contained" size="medium" color="primary" className={classes.margin}
                            onClick={this.onSubmit}
                            disabled={this.state.login.trim() === "" || this.state.password === ""}>
                        Connexion
                    </Button>
                </FormControl>

            </div>

        );
    }
}

export default FormLogin = (withStyles(styles)(FormLogin));
