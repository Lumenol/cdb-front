import React, {Component} from 'react';
import Switch from '@material-ui/core/Switch';
import {connect} from "react-redux";
import {logout} from "../redux/connection";
import {selectIsConnected} from "../redux/selectors";
import PropTypes from "prop-types";

class DisconnectButton extends Component {

    onChange = (event) => {
        const checked = event.target.checked;
        const {logout} = this.props;
        if (!checked) {
            logout();
        }
    };

    render() {
        const {isConnected} = this.props;
        return (
            <Switch
                checked={isConnected}
                onChange={this.onChange}
                color="primary">
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

export default connect(mapStateToProps, mapDispatchToProps)(DisconnectButton);
