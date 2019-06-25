import React, {Component, Fragment} from 'react';
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
import {selectCompanyImg} from "../utils/selectCompanyImage";

class ComputerCard extends Component {


    toggleSelect = () => {
        this.props.isSelected ? this.props.unselect() : this.props.select();
    };

    render() {
        const {name, manufacturer, introduced, discontinued} = this.props.computer;
        const style = this.props.isSelected ? "cardSelected" : "card";

        return (
            <Fragment>
                <Grid item xs={10}>
                    <Card className={style} onClick={this.toggleSelect}>
                        <CardActionArea>
                            <CardMedia
                                className="media"
                                image={selectCompanyImg(manufacturer)}
                                title="Brand"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" color="primary">
                                    {name}
                                </Typography>
                                <Typography variant="subtitle1" component="p">
                                    {manufacturer}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {introduced} • {discontinued}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                {
                    this.props.isSelected ?
                        <Grid item xs={2}>
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
                            </Grid>
                        </Grid> : null
                }</Fragment>
        )
            ;
    }
}

const mapStateToProps = (state, props) => {
    return {
        isSelected: selectSelectedComputers(state).includes(props.computer.id)
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        select: () => dispatch(selectComputer(props.computer.id)),
        unselect: () => dispatch(unselectComputer(props.computer.id))
    }
};

export default ComputerCard = connect(mapStateToProps, mapDispatchToProps)(ComputerCard)
