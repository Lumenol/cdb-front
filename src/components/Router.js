import React from "react";
import CompaniesContainer from "../containers/CompaniesContainer";
import {SHOW} from "../redux/router";
import ComputerContainer from "../containers/CardContainer";
import connect from "react-redux/es/connect/connect";
import {selectShow} from "../redux/selectors";
import UsersContainer from "../containers/UsersContainer";

function Router(props) {
    switch (props.show) {
        case SHOW.COMPANIES:
            return (<CompaniesContainer/>);
        case SHOW.USERS:
            return (<UsersContainer/>);
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