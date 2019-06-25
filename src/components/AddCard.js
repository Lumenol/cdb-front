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

class AddCard extends Component {

    state = {
        name: "",
        introductionDate: "",
        discontinuedDate: "",
        company: "",
    };

    render() {
        return (
            <Grid item xs={3} container direction="row">
                <Card className="addCard">

                    <CardMedia
                        className="media"
                        image={selectCompanyImg(this.state.company)}
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
                                value="Company"
                                inputProps={{
                                    name: 'age',
                                    id: 'age-simple',
                                }}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
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

export default AddCard;