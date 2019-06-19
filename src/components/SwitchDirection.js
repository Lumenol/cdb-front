import React, {Component} from 'react';
import Switch from '@material-ui/core/Switch';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {selectComputerDirection} from "../redux/selectors";
import {connect} from "react-redux";
import {DIRECTION, setDirectionComputer} from "../redux/computerDirection";
import PropTypes from "prop-types";


class SwitchDirection extends Component {

    constructor(props) {
        super(props);

    }


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
                        <Switch checked={this.isChecked()} onChange={this.onChangeDirection}/>
                    </Grid>
                    <Grid item>Desc</Grid>
                </Grid>
            </Typography>
        )
            ;
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
    value: PropTypes.oneOf(DIRECTION).isRequired
};

export default SwitchDirection = connect(mapStateToProps, mapDispatchToProps)(SwitchDirection);

