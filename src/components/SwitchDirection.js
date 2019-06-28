import React, {Component} from 'react';
import Switch from '@material-ui/core/Switch';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {selectComputerDirection} from "../redux/selectors";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {DIRECTION, setDirectionComputer} from "../redux/searchParameters";


class SwitchDirection extends Component {

    onChangeDirection = (event) => {
        this.props.onChange(event.target.checked ? DIRECTION.DESC : DIRECTION.ASC);
    };

    isChecked = () => this.props.value === DIRECTION.DESC;

    render() {
        return (
            <Typography component="div">
                <Grid component="label" container alignItems="center" spacing={1}>
                    <Grid item>Asc</Grid>
                    <Grid item>
                        <Switch color="primary" checked={this.isChecked()} onChange={this.onChangeDirection}/>
                    </Grid>
                    <Grid item>Desc</Grid>
                </Grid>
            </Typography>
        );
    }
}

function mapStateToProps(state) {
    return {
        value: selectComputerDirection(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: direction => {
            dispatch(setDirectionComputer(direction));
        }
    }
}

SwitchDirection.propTypes = {
    value: PropTypes.oneOf(Object.values(DIRECTION)).isRequired
};

export default SwitchDirection = connect(mapStateToProps, mapDispatchToProps)(SwitchDirection);

