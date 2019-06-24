import React, {Component} from "react";
import Card from "@material-ui/core/Card";
import {Grid} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import "../css/ComputerCard.css";
import Box from "@material-ui/core/Box";

class AddCard extends Component {

    render() {
        return (
            <Grid item xs={10} container justify="center">
                <Grid item xs={10}>
                    <Card className="addCard">
                        <Box className="color">
                            <FontAwesomeIcon icon={faPlus} color="secondary"
                                             className="fas fa-camera fa-10x"></FontAwesomeIcon>
                        </Box>
                    </Card></Grid></Grid>
        );
    }
}

export default AddCard;