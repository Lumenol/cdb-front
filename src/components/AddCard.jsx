import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import '../css/ComputerCard.css';
import CardActionArea from "@material-ui/core/CardActionArea";
import {Grid} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";

export class AddCard extends Component {
    state = {
        create: false
    }

    render() {
        return (
            <Grid container direction="row" spacing={1} className="addCard">
            <Card color='orange'>
                <CardActionArea className="addCard">

                </CardActionArea>
            </Card>
            </Grid>
        );
    }
}