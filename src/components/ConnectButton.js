import React, {Component} from 'react';
import Switch from '@material-ui/core/Switch';
import {connect} from "react-redux";
import {toggleConnect} from "../redux/connection";
import {selectIsConnected} from "../redux/selectors";

class ConnectButton extends Component {

    render() {
        return (
            <Switch
                checked={this.props.isConnected}
                onChange={this.props.clickConnectButton}
                color="primary">
            </Switch>
        )
    }

}


const mapStateToProps = state => {
    return {isConnected: selectIsConnected(state)};
};

function mapDispatchToProps(dispatch) {
    return {
        clickConnectButton: (isConnected) => dispatch(toggleConnect(isConnected)),
    }
}

export default ConnectButton = connect(mapStateToProps, mapDispatchToProps)(ConnectButton);
