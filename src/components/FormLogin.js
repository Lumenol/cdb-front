import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import {login} from "../redux/connection";
import connect from "react-redux/es/connect/connect";
import {withTranslation} from "react-i18next";


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
    error: {
        color: 'red'
    }
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

    onClickConnexion = () => {
        this.props.OnSubmit(this.state.login, this.state.password);
        this.setState({
            login: "",
            password: ""
        })
    };

    handleKeyPress = (event) => {
        if (this.fieldsBasicChecks()) {
            if (event.key === 'Enter') {
                this.props.OnSubmit(this.state.login, this.state.password);
                this.setState({
                    login: "",
                    password: ""
                })
            }
        }
    };

    fieldsBasicChecks = () => {
        return (this.state.login.trim() !== "" && this.state.password !== "")
    };

    render() {
        const {classes, t} = this.props;

        return (
            <div>
                <FormControl>
                    <TextField
                        id="standard-search"
                        label={t("connection.login")}
                        type="search"
                        className={classes.textField}
                        margin="normal"
                        value={this.state.login}
                        onChange={this.onInputOnLogin}
                        onKeyPress={this.handleKeyPress}
                    />
                    <TextField
                        id="standard-password-input"
                        label={t("connection.password")}
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        value={this.state.password}
                        onChange={this.onInputOnPassword}
                        onKeyPress={this.handleKeyPress}
                    />
                    <Button variant="contained" size="medium" color="primary" className={classes.margin}
                            onClick={this.onClickConnexion}
                            disabled={!this.fieldsBasicChecks()}>
                        {t("connection.connection")}
                    </Button>
                </FormControl>
            </div>

        );
    }
}



function mapDispatchToProps(dispatch) {
    return {
        OnSubmit: (l, p) => dispatch(login(l, p)),
    }
}

const Translation = withTranslation()(FormLogin);
export default FormLogin = connect(null, mapDispatchToProps)(withStyles(styles)(Translation));
