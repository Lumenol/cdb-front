import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import {connect} from "react-redux";
import {selectComputerSearch} from "../redux/selectors";
import {setSearchComputer} from "../redux/computerSearch";
import PropTypes from 'prop-types';
import {withTranslation} from "react-i18next";


class InputSearch extends Component {

    onChangeSearch = (event) => {
        this.props.onChange(event.target.value);
    };

    render() {
        const {value, t} = this.props;
        return (
            <TextField id="input-with-icon-grid" value={value} onChange={this.onChangeSearch}
                       label={t("title.search")}/>
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

const Translation = withTranslation()(InputSearch);
export default InputSearch = connect(mapStateToProps, mapDispatchToProps)(Translation);