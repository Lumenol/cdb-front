import React, {Component} from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    root: {
        maxWidth: 400,
        flexGrow: 1,
    }
};

class PageSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            step: this.props.currentStep,
            page: this.props.currentPage,
            mid : Math.ceil(this.props.maxStep / 2)
        }
    }

    handleNext = () => {
        this.setState((prev,props) => ({
            page: prev.page < props.maxPage ? prev.page +1 : prev.page
        }));
    };

    handleBack = () => {
        this.setState((prev,props) => ({
            page: prev.page > props.minPage ? prev.page -1 : prev.page
        }));
    }

    render() {
        const {classes} = this.props;

        return (
            <div>
                <MobileStepper
                    variant="dots"
                    steps={this.props.maxStep+1}
                    position="static"
                    activeStep=
                        {
                            this.state.page < this.state.mid ?
                            this.state.page :
                            (
                                this.props.maxPage -this.state.mid < this.state.page  ?
                                (this.props.maxStep - (this.props.maxPage - this.state.page)) :
                                this.state.mid
                            )
                        }
                    className={classes.root}
                    nextButton={
                        <Button size="small" onClick={this.handleNext} disabled={this.state.page === this.props.maxPage}>
                            <KeyboardArrowRight/>
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={this.handleBack} disabled={this.state.page === this.props.minPage}>
                            <KeyboardArrowLeft/>
                        </Button>
                    }
                />
                <p>
                    {this.state.page}
                </p>
            </div>

        )
    }


}

export default PageSelector = withStyles(styles)(PageSelector);

