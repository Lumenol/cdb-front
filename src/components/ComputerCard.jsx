import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';
import '../css/ComputerCard.css';
import theme from '../palette.js';
import {withStyles} from "@material-ui/core";

const style = withStyles({
           backgroundColor: theme.palette.primary.main
})(Card);

export class ComputerCard extends Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
            <Card className="card">
                <CardActionArea>
                    <CardMedia
                        className="media"
                        image='https://bit.ly/2WM55gP'
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Macbook Pro
                        </Typography>
                        <Typography variant="body2" color={theme.primary.main} component="p">
                            Apple Inc.
                        </Typography>
                        <Typography variant="body2" component="p">
                            05.11.2000 / 06.03.2005
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            </ThemeProvider>
        );
    }

}