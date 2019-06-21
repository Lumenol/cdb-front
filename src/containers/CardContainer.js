import React, {Component} from 'react';
import {connect} from "react-redux";
import {selectComputers} from "../redux/selectors";
import ComputerCard from "../components/ComputerCard";
import Grid from "@material-ui/core/Grid";
import '../css/ComputerCard.css';

class ComputerContainer extends Component {

    /*<Grid container direction="row" spacing={2}>
                <Grid item xs={3} container direction="row">
                    <Grid item xs={10}><div className="card_test"></div></Grid>
                    <Grid item xs={2}><div className="icon_test"></div></Grid>
                </Grid>*/

    render() {
        const {computers} = this.props;

        return (
            <Grid container direction="row" spacing={2}>
                {computers.map(e => <Grid item xs={3} container direction="row"><ComputerCard computer={e} key={e.id}/></Grid>)}
            </Grid>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        computers: selectComputers(state)
    };
};

export default ComputerContainer = connect(mapStateToProps)(ComputerContainer);