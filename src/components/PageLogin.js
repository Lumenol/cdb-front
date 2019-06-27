import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import {login} from "../redux/connection";
import {withTranslation} from "react-i18next";
import connect from "react-redux/es/connect/connect";
import Box from "@material-ui/core/Box";


const useStyles = theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://www.lebigdata.fr/wp-content/uploads/2018/01/base-donnees-fonctionnement-1024x576.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    brand: {
        marginBottom: theme.spacing(10),
    }
});

class PageLogin extends Component {
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
            <Grid container component="main" className={classes.root}>
                <CssBaseline/>
                <Grid item xs={false} sm={4} md={7} className={classes.image}/>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <div className={classes.brand}>
                            <Typography variant="h3" align="center" color="primary" fontFamily="Permanent Marker">
                                <Box fontFamily="Permanent Marker"> {t("title.title")}</Box>
                            </Typography></div>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <form className={classes.form} noValidate onSubmit={() => false}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="standard-search"
                                label={t("connection.login")}
                                type="search"
                                autoFocus
                                value={this.state.login}
                                onChange={this.onInputOnLogin}
                                onKeyPress={this.handleKeyPress}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                label={t("connection.password")}
                                required
                                fullWidth
                                name="password"
                                type="password"
                                id="password"
                                value={this.state.password}
                                onChange={this.onInputOnPassword}
                                onKeyPress={this.handleKeyPress}
                            />

                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={this.onClickConnexion}
                                disabled={!this.fieldsBasicChecks()}
                                className={classes.submit}
                            >
                                {t("connection.connection")}
                            </Button>


                        </form>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        OnSubmit: (l, p) => dispatch(login(l, p)),
    }
}

const Translation = withTranslation()(PageLogin);
export default PageLogin = connect(null, mapDispatchToProps)(withStyles(useStyles)(Translation));
