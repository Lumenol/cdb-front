import React, {Component} from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {withStyles} from '@material-ui/core/styles';
import connect from "react-redux/es/connect/connect";
import {getPageSelectorState} from "../redux/selectors";
import {nextPage, previousPage} from "../redux/PageSelector";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const styles = {
    root: {
        maxWidth: 400,
        flexGrow: 1,
    }
};

class PageSelector extends Component {

    state = {
        displayControl: false
    };

    onMouseOver = () => {
        console.log("on mouse over" + this.state.displayControl);
        this.setState({
            displayControl: true
        })
    };

    onMouseOut = () => {
        console.log("onMouseOut" + this.state.displayControl);
        this.setState({
            displayControl: false
        })
    };

    render() {
        const {classes} = this.props;
        return (
            <Grid container direction="row" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>

                <Grid item container justify="center">
                    {this.state.displayControl ?
                        <Typography color="secondary">
                            Page {this.props.page} / {this.props.maxPage}
                        </Typography> : null}
                </Grid>
                <Grid item container justify="center">
                    <MobileStepper
                        variant="dots"
                        steps={this.props.maxStep + 1}
                        position="static"
                        activeStep=
                            {
                                this.props.page < this.props.midStep ?
                                    this.props.page - 1 :
                                    (
                                        this.props.maxPage - this.props.midStep < this.props.page ?
                                            this.props.maxStep - (this.props.maxPage - this.props.page) :
                                            this.props.midStep
                                    )
                            }
                        className={classes.root}
                        nextButton={
                            <Button size="small" onClick={this.props.clickNextPageButton}
                                    disabled={this.props.page === this.props.maxPage}>
                                <KeyboardArrowRight/>
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={this.props.clickPreviousPageButton}
                                    disabled={this.props.page === this.props.minPage}>
                                <KeyboardArrowLeft/>
                            </Button>
                        }
                    />
                </Grid>
            </Grid>

        )
    }
}

const mapStateToProps = state => {
    return {...getPageSelectorState(state)};
};

function mapDispatchToProps(dispatch) {
    return {
        clickNextPageButton: () => dispatch(nextPage()),
        clickPreviousPageButton: () => dispatch(previousPage()),
    }
}

export default PageSelector = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PageSelector));


