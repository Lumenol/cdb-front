import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import {connect} from "react-redux";
import {setPageSize} from "../redux/ChangePagination";
import {selectPageSize} from "../redux/selectors";
import * as PropTypes from "prop-types";



const styles = theme => ({
    root: {
        width: 200,
    },
    margin: {
        height: theme.spacing(5),

    },


});

const marks = [
    {
        value: 10,
    },
    {
        value: 50,
    },
    {
        value: 100,
    },
];

class ChangePagination extends Component {

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.margin && classes.root}>
                <Typography id="pagination-slider" gutterBottom>
                    Pagination
                </Typography>
                <Slider
                    min={10}
                    max={100}
                    defaultValue={10}
                    aria-labelledby="pagination-slider"
                    step={null}
                    valueLabelDisplay="auto"
                    marks={marks}
                    checked={this.props.changeValue}
                    onChange={this.props.slideOnSlider}
                />

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        changeValue: selectPageSize(state)
    }
};

function mapDispatchToProps(dispatch) {
    return {
        slideOnSlider: (size) => dispatch(setPageSize(size)),
    }
}

const Styled = withStyles(styles)(ChangePagination);

ChangePagination.propTypes = {
    Styled: PropTypes.func,
    classes: PropTypes.object

};

export default ChangePagination = connect(mapStateToProps, mapDispatchToProps)(Styled);
