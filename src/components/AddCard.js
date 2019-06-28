import React, {Component, Fragment} from "react";
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
import {selectCompanies, selectMenuIsOpen} from "../redux/selectors";
import {addComputer, updateComputer} from "../redux/computers";
import {addButton} from "../redux/addButton";
import {updateButton} from "../redux/updateButton";

class AddCard extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef()
    }

    componentDidMount = () => this.handleScroll();

    componentDidUpdate = () => this.handleScroll();

    handleScroll = () => {
        const {index, selected} = this.props;
        if (index === selected) {
            setTimeout(() => {
                this.myRef.current.scrollIntoView({behavior: 'smooth'})
            }, 500)
        }
    };


    state = {
        id: this.props.computer ? this.props.computer.id : null,
        name: this.props.computer ? this.props.computer.name : null,
        introductionDate: this.props.computer ? this.props.computer.introduced : null,
        discontinuedDate: this.props.computer ? this.props.computer.discontinued : null,
        company: this.props.computer && this.props.companies ? this.props.companies.find((e) => e.name === this.props.computer.manufacturer) || {} : {},
        errorMsg: {
            name: this.props.computer ? null : "Please provide computer's name."
        },
        mode: this.props.computer ? "Mettre à jour" : "Créer"
    };

    checkDate(date) {
        if ((new Date(date).getTime() < new Date(1970, 1, 1).getTime()))
            return "Date cannot be before 01/01/1970";
    }

    checkName(name) {
        if (name === null || name.trim() === "")
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
        if (this.state.id) {
            this.props.updateComputer(this.state.id, this.state.name, this.state.introductionDate, this.state.discontinuedDate, this.state.company.id);
            this.props.update(false, {
                id: this.state.id,
                name: this.state.name,
                introduced: this.state.introductionDate,
                discontinued: this.state.discontinuedDate,
                manufacturer: this.state.company.name
            });
        } else {
            this.props.addComputer(this.state.name, this.state.introductionDate, this.state.discontinuedDate, this.state.company.id);
            this.props.add(false);
        }
    };

    render() {
        const companies = this.props.companies || [];
        const rendering = (
            <Grid item xs={4} container direction="row">
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
                                placeholder={this.state.name}
                                value={this.state.name || ""}
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
                                defaultValue={this.state.introductionDate}
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
                                defaultValue={this.state.discontinuedDate}
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
                                <Typography>{this.state.mode}</Typography>
                            </Button>
                        </CardContent>
                    </form>

                </Card>
            </Grid>);

        return (
            <Fragment>
                <div ref={this.myRef}></div>
                {this.props.open ?
                    <Fragment>
                        <Grid item xs={4} md={4} lg={2}></Grid>
                        <Grid item xs={7} md={7} lg={9} container justify="center">
                            {rendering}
                        </Grid></Fragment> :
                    <Grid item xs={11} container justify="center">
                        {rendering}
                    </Grid>
                }
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        companies: selectCompanies(state),
        open: selectMenuIsOpen(state),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addComputer: (name, inDate, outDate, companyId) => dispatch(addComputer(name, inDate, outDate, companyId)),
        add: (boolean) => {
            dispatch(addButton(boolean));
        },
        update: (boolean, computer) => {
            dispatch(updateButton(boolean, computer));
        },
        updateComputer: (id, name, inDate, outDate, companyId) => dispatch(updateComputer(id, name, inDate, outDate, companyId))
    }
};

export default AddCard = connect(mapStateToProps, mapDispatchToProps)(AddCard);
