import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import '../css/ComputerCard.css';
import CardActionArea from "@material-ui/core/CardActionArea";
import {Grid} from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";

export class AddCard extends Component {
    state = {
        create: false
    };

    render() {
        return (
            <Grid container direction="row" spacing={1}>
                <Grid item lg={10} md={10} xs={10}>
                    <Card className={this.style} onClick={this.toggleSelect}>
                        <div className="addCard">
                            <CardActionArea>
                                <CardContent>
                                </CardContent>
                            </CardActionArea>
                        </div>
                    </Card>
                </Grid>
            </Grid>
        );
    }
}