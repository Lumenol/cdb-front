import React, {Component} from 'react';
import {connect} from "react-redux";
import {selectComputers} from "../redux/selectors";
import ComputerCard from "../components/ComputerCard";
import Grid from "@material-ui/core/Grid";
import '../css/ComputerCard.css';

class ComputerContainer extends Component {

    render() {
        const {computers} = this.props;

        return (
            <Grid container direction="row" spacing={2}>
                {computers.map(e => <Grid item xs={10} md={5} lg={3} spacing={1} container direction="row"
                                          key={e.id}><ComputerCard
                    computer={e}/></Grid>)}
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