import React, {Component} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {connect} from "react-redux";
import {selectComputerOrderBy} from "../redux/selectors";
import {ORDER_BY, setOrderByComputer} from "../redux/computerOrderBy";
import PropTypes from "prop-types";

class OrderBy extends Component {

    onChangeOrderBy = (event) => {
        this.props.onChange(event.target.value);
    };

    render() {
        const {value} = this.props;
        const {COMPANY, INTRODUCED, ID, DISCONTINUED, NAME} = ORDER_BY;
        return (
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Order by</FormLabel>
                    <RadioGroup value={value} onChange={this.onChangeOrderBy}>
                        <FormControlLabel value={ID} control={<Radio/>} label="Id"/>
                        <FormControlLabel value={NAME} control={<Radio/>} label="Name"/>
                        <FormControlLabel value={COMPANY} control={<Radio/>} label="Company"/>
                        <FormControlLabel value={INTRODUCED} control={<Radio/>} label="Introduced"/>
                        <FormControlLabel value={DISCONTINUED} control={<Radio/>} label="Discontinued"/>
                    </RadioGroup>
                </FormControl>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        value: selectComputerOrderBy(state)
    }
}


function mapDispatchToProps(dispatch) {
    return {
        onChange: orderBy => {
            dispatch(setOrderByComputer(orderBy));
        }
    }
}

OrderBy.propTypes = {
    value: PropTypes.oneOf(ORDER_BY).isRequired
};

export default OrderBy = connect(mapStateToProps, mapDispatchToProps)(OrderBy);