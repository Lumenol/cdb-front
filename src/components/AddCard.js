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
import {addComputer} from "../redux/computers";
import {addButton} from "../redux/addButton";

class AddCard extends Component {

    state = {
        name: "",
        introductionDate: "",
        discontinuedDate: "",
        company: {},
        errorMsg: {
            name: "Please provide computer's name."
        }
    };

    checkDate(date) {
        console.log(date);
        if ((new Date(date).getTime() < new Date(1970, 1, 1).getTime()))
            return "Date cannot be before 01/01/1970";
    }

    checkName(name) {
        if (name === undefined || name.trim() === "")
            return "Please provide computer's name.";
    }

    checkCompany(company) {
        if (!this.props.companies.includes(company))
            return "Sorry, company does not exist.";
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

        const date = event.target.value;
        this.setState({
            introductionDate: date,
            errorMsg: {
                ...this.state.errorMsg,
                inDate: this.checkDate(date)
            }
        });
    };

    onOutDateChange = (event) => {
        this.setState({
            discontinuedDate: event.target.value,
            errorMsg: {
                ...this.state.errorMsg,
                outDate: this.checkDate(event.target.value)
            }
        });
    };

    onCompanyChange = (event) => {
        this.setState({
            company: event.target.value,
            errorMsg: {
                ...this.state.errorMsg,
                company: this.checkCompany(event.target.value)
            }
        });
    };

    submit = () => {
        if (this.state.errorMsg.name || this.state.errorMsg.inDate
            || this.state.errorMsg.outDate || this.state.errorMsg.company)
            return;
        if (this.state.discontinuedDate && new Date(this.state.discontinuedDate).getTime()
            < new Date(this.state.introductionDate).getTime()) {
            this.setState({
                errorMsg: {
                    ...this.state.errorMsg,
                    outDate: "Discontinued date cannot be before introduced date."
                }
            });
            return;
        }
        {/*si update ou create mode, alors addComputer ou createComputer*/
        }
        this.props.addComputer(this.state.name, this.state.introductionDate, this.state.discontinuedDate, this.state.company.id);
        this.props.add(false);
    };

    render() {
        const companies = this.props.companies;
        return (
            <Grid item xs={12} container direction="row">
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
                            {this.state.name === "" || this.state.errorMsg.name ?
                                <h5>{this.state.errorMsg.name} </h5> : null}
                        </CardContent>

                        <CardContent>
                            <TextField
                                id="date"
                                label="Introduced date"
                                type="date"
                                onChange={this.onInDateChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            {this.state.errorMsg.inDate ? <h5>{this.state.errorMsg.inDate} </h5> : null}
                        </CardContent>

                        <CardContent>
                            <TextField
                                id="date"
                                label="Discontinued date"
                                onChange={this.onOutDateChange}
                                type="date"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            {this.state.errorMsg.outDate ? <h5>{this.state.errorMsg.outDate} </h5> : null}
                        </CardContent>

                        <CardContent>
                            <InputLabel htmlFor="age-simple">Company</InputLabel>
                            <Select
                                value={this.state.company}
                                onChange={this.onCompanyChange}
                            >
                                {companies.map(e => <MenuItem value={e} key={e.id}>{e.name}</MenuItem>)}
                            </Select>
                            {this.state.errorMsg.company ? <h5>{this.state.errorMsg.company} </h5> : null}
                        </CardContent>

                        <CardContent>
                            <Button variant="contained" color="primary" onClick={this.submit}>
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

const mapDispatchToProps = (dispatch) => {
    return {
        addComputer: (name, inDate, outDate, companyId) => dispatch(addComputer(name, inDate, outDate, companyId)),
        add: (boolean) => {
            dispatch(addButton(boolean));
        },
    }
};

export default AddCard = connect(mapStateToProps, mapDispatchToProps)(AddCard);