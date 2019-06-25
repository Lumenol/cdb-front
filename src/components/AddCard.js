import React, {Component} from "react";
import Card from "@material-ui/core/Card";
import {Grid} from "@material-ui/core";
import "../css/ComputerCard.css";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {selectCompanyImg} from "../utils/selectCompanyImage";
import {connect} from "react-redux";
import {selectCompanies} from "../redux/selectors";

class AddCard extends Component {

    state = {
        name: "",
        introductionDate: "",
        discontinuedDate: "",
        company: {},
        errorMsg: {}
    };

    checkName(name) {
        if (name === undefined || name.trim() === "")
            return "Please provide computer's name.";
    }

    checkCompany(company) {
        // if (name === undefined || name.trim() == "")
        return "Please provide computer's name.";
    }

    onNameChange = (event) => {
        this.setState({
            name: event.target.value,
            errorMsg: {
                ...this.state.errorMsg,
                name: this.checkName(event.target.value)
            }
        });
    };

    onInDateChange = (event) => {
        this.setState({
            introductionDate: event.target.value,
            errorMsg: {
                ...this.state.errorMsg,
                name: this.checkDate(event.target.value)
            }
        });
    };

    onOutDateChange = (event) => {
        this.setState({
            discontinuedDate: event.target.value,
            errorMsg: {
                ...this.state.errorMsg,
                name: this.checkDate(event.target.value)
            }
        });
    };

    onCompanyChange = (event) => {
        console.log(event.target);
        this.setState({
            company: event.target.value,
            errorMsg: {
                ...this.state.errorMsg,
                error: this.checkCompany(event.target.value.name)
            }
        });
    };

    render() {
        const companies = this.props.companies;
        console.log(this.state.company);
        return (
            <Grid item xs={3} container direction="row">
                <Card className="addCard">

                    <CardMedia
                        className="media"
                        image={selectCompanyImg(this.state.company.name)}
                        title="Brand"
                    />

                    <form>
                        <CardContent>
                            <TextField
                                id="standard-full-width"
                                style={{margin: 5}}
                                label="Computer name"
                                placeholder="Computer name"
                                fullWidth
                                margin="normal"
                                onChange={this.onNameChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </CardContent>

                        <CardContent>
                            <TextField
                                id="date"
                                label="Introduced date"
                                type="date"
                                onChange={this.onInDateChange}
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </CardContent>

                        <CardContent>
                            <TextField
                                id="date"
                                label="Discontinued date"
                                onChange={this.onOutDateChange}
                                type="date"
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </CardContent>

                        <CardContent>
                            <InputLabel htmlFor="age-simple">Company</InputLabel>
                            <Select
                                value={this.state.company}
                                onChange={this.onCompanyChange}
                            >
                                {companies.map(e => <MenuItem value={e} key={e.id}>{e.name}</MenuItem>)}
                            </Select>
                        </CardContent>

                        <CardContent>
                            <Button variant="contained" color="primary">
                                <Typography>Créer</Typography>
                            </Button>
                        </CardContent>
                    </form>

                </Card>
            </Grid>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        companies: selectCompanies(state)
    };
};

export default AddCard = connect(mapStateToProps)(AddCard);
