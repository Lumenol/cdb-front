import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {faKeyboard} from "@fortawesome/free-solid-svg-icons";
import '../css/ComputerCard.css';
import {Grid} from "@material-ui/core";
import Fab from '@material-ui/core/Fab';

export class ComputerCard extends Component {

    state = {
        selected: false
    }

    style = "card"

    toggleSelect = () => {
        this.setState({
            selected: !this.state.selected
        })
        this.style === "cardSelected" ? this.style = "card" : this.style = "cardSelected";
    }

    render() {
        {
            console.log(this.state.selected)
        }
        return (
            <Grid container direction="row"  spacing={1} >
                <Grid item lg={10} md={10} xs={10}>
                    <Card className={this.style} onClick={this.toggleSelect}>
                        <CardActionArea>
                            <CardMedia
                                className="media"
                                image='https://bit.ly/2WM55gP'
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" color="primary">
                                    Macbook Pro
                                </Typography>
                                <Typography variant="subtitle1" component="p">
                                    Apple Inc.
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    05.11.2000 • 06.03.2005
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                {this.state.selected ?
                    <Grid item container direction="column" spacing={1} xs={2} lg={2} md={2}>
                        <Grid item xs={1}>
                            <Fab size="small" color="primary" aria-label="Delete">
                                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                            </Fab>
                        </Grid>

                        <Grid item xs={1}>
                            <Fab size="small" color="primary" aria-label="Delete">
                                <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>
                            </Fab>
                        </Grid>
                    </Grid> : null}
            </Grid>

        );
    }

}