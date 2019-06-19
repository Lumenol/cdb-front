import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import {connect} from "react-redux";
import {selectComputerSearch} from "../redux/selectors";
import {setSearchComputer} from "../redux/computerSearch";
import PropTypes from 'prop-types';


class InputSearch extends Component {


    constructor(props) {
        super(props);
    }

    onChangeSearch = (event) => {
        this.props.onChange(event.target.value);
    };

    render() {
        const {value} = this.props;
        return (
            <TextField id="input-with-icon-grid" value={value} onChange={this.onChangeSearch}
                       label="Search"/>
        );
    }
}


function mapStateToProps(state) {
    return {
        value: selectComputerSearch(state)
    }
}


function mapDispatchToProps(dispatch) {
    return {
        onChange: search => {
            dispatch(setSearchComputer(search));
        }
    }
}

InputSearch.propTypes = {
    value: PropTypes.string.isRequired,
};

export default InputSearch = connect(mapStateToProps, mapDispatchToProps)(InputSearch);