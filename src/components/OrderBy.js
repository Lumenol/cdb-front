import React, {Component} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {connect} from "react-redux";
import {selectComputerOrderBy} from "../redux/selectors";
import PropTypes from "prop-types";
import {withTranslation} from "react-i18next";
import {ORDER_BY, setOrderByComputer} from "../redux/searchParameters";

class OrderBy extends Component {

    onChangeOrderBy = (event) => {
        this.props.onChange(event.target.value);
    };

    render() {
        const {value, t} = this.props;
        const {COMPANY, INTRODUCED, ID, DISCONTINUED, NAME} = ORDER_BY;
        return (
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">{t("title.orderBy")}</FormLabel>
                    <RadioGroup value={value} onChange={this.onChangeOrderBy}>
                        <FormControlLabel value={ID} control={<Radio color="primary"/>} label="Id"/>
                        <FormControlLabel value={NAME} control={<Radio color="primary"/>} label={t("computer.name")}/>
                        <FormControlLabel value={COMPANY} control={<Radio color="primary"/>}
                                          label={t("computer.company")}/>
                        <FormControlLabel value={INTRODUCED} control={<Radio color="primary"/>}
                                          label={t("computer.introduced")}/>
                        <FormControlLabel value={DISCONTINUED} control={<Radio color="primary"/>}
                                          label={t("computer.discontinued")}/>
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
    value: PropTypes.oneOf(Object.values(ORDER_BY)).isRequired,
    onChange: PropTypes.func.isRequired
};
const Translation = withTranslation()(OrderBy);
export default OrderBy = connect(mapStateToProps, mapDispatchToProps)(Translation);