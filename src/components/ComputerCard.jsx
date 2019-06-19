import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faKeyboard, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import '../css/ComputerCard.css';
import {Grid} from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import {selectComputer, unselectComputer} from "../redux/computers";
import {connect} from "react-redux";
import {selectSelectedComputers} from "../redux/selectors";

class ComputerCard extends Component {

    constructor(props) {
        super(props);
    }

    toggleSelect = () => {
        this.props.isSelected ? this.props.unselect() : this.props.select();
    };

    render() {
        debugger;
        const {id, name, brand} = this.props.computer;
        const style = this.props.isSelected ? "cardSelected" : "card";
        return (
            <Grid container direction="row"  spacing={1} >
                <Grid item lg={10} md={10} xs={10}>
                    <Card className={style} onClick={this.toggleSelect}>
                        <CardActionArea>
                            <CardMedia
                                className="media"
                                image='https://bit.ly/2WM55gP'
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" color="primary">
                                    {name}
                                </Typography>
                                <Typography variant="subtitle1" component="p">
                                    {brand}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    05.11.2000 • 06.03.2005
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                {this.props.isSelected ?
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

const mapStateToProps = (state, props) => {
    return {
        computer: {
            name: 'Macintosh yeah',
            brand: 'Apple Inc.',
            id: 1,
        },
        isSelected: selectSelectedComputers(state).includes(props.id)
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        select: () => dispatch(selectComputer(props.id)),
        unselect: () => dispatch(unselectComputer(props.id))
    }
};

export default ComputerCard = connect(mapStateToProps, mapDispatchToProps)(ComputerCard)