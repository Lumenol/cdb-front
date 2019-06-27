import React, {Component} from 'react';
import Switch from '@material-ui/core/Switch';
import {connect} from "react-redux";
import {logout} from "../redux/connection";
import {selectIsConnected} from "../redux/selectors";
import PropTypes from "prop-types";
import {withTranslation} from "react-i18next";

class DisconnectButton extends Component {


    onChange = (event) => {
        const checked = event.target.checked;
        const {logout} = this.props;
        if (!checked) {
            logout();
        }
    };

    render() {
        const {isConnected, t} = this.props;
        return (
            <Switch title={t("header.hover.disconnectButton")}
                    checked={isConnected}
                    onChange={this.onChange}
                    color="secondary">
            </Switch>
        )
    }

}

DisconnectButton.propTypes = {
    logout: PropTypes.func.isRequired,
    isConnected: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
    return {isConnected: selectIsConnected(state)};
};

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(logout())
    }
}

const Translation = withTranslation()(DisconnectButton);
export default connect(mapStateToProps, mapDispatchToProps)(Translation);
