import React from "react";
import {CompaniesContainer} from "../containers/CompaniesContainer";
import {SHOW} from "../redux/router";
import ComputerContainer from "../containers/CardContainer";
import connect from "react-redux/es/connect/connect";
import {selectShow} from "../redux/selectors";

function Router(props) {
    switch (props.show) {
        case SHOW.COMPANIES:
            return (<CompaniesContainer/>);
        default :
        case SHOW.COMPUTERS:
            return (<ComputerContainer/>);
    }
}

function mapDispatchToProps(state) {
    return {
        show: selectShow(state)
    };
}

export default connect(mapDispatchToProps)(Router);