import React, {Component} from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {withStyles} from '@material-ui/core/styles';
import connect from "react-redux/es/connect/connect";
import {selectCurrentPage, selectMaxPage, selectMinPage} from "../redux/selectors";
import {Grid} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {nextPage, previousPage} from "../redux/searchParameters";

const styles = {
    root: {
        maxWidth: 400,
        flexGrow: 1,
    }
};

const step = {
    midStep: 3,
    maxStep: 6,
};

class PageSelector extends Component {

    state = {
        displayControl: false
    };

    onMouseOver = () => {
        this.setState({
            displayControl: true
        })
    };

    onMouseOut = () => {
        this.setState({
            displayControl: false
        })
    };

    render() {
        const {classes, currentPage, minPage, maxPage, next, previous} = this.props;
        const {midStep, maxStep} = step;
        const {displayControl} = this.state;
        return (
            <Grid container direction="row" onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>

                <Grid item container justify="center">
                    {displayControl ?
                        <Typography color="secondary">
                            Page {currentPage} / {maxPage}
                        </Typography> : null}
                </Grid>
                <Grid item container justify="center">
                    <MobileStepper
                        variant="dots"
                        steps={maxStep + 1}
                        position="static"
                        activeStep=
                            {
                                currentPage < midStep ?
                                    currentPage - 1 :
                                    (
                                        maxPage - midStep < currentPage ?
                                            maxStep - (maxPage - currentPage) :
                                            midStep
                                    )
                            }
                        className={classes.root}
                        nextButton={
                            <Button size="small" onClick={next}
                                    disabled={currentPage === maxPage}>
                                <KeyboardArrowRight/>
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={previous}
                                    disabled={currentPage === minPage}>
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
    return {currentPage: selectCurrentPage(state), minPage: selectMinPage(state), maxPage: selectMaxPage(state)};
};

function mapDispatchToProps(dispatch) {
    return {
        next: () => dispatch(nextPage()),
        previous: () => dispatch(previousPage()),
    }
}

export default PageSelector = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PageSelector));


