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
            activeStep: this.props.current
        }
    }

    handleNext = () => {
        this.setState((prev,props) => ({ activeStep: prev.activeStep < props.max ? prev.activeStep + 1 : prev.activeStep }));
    };

    handleBack = () => {
        this.setState((prev,props) => ({ activeStep: prev.activeStep > props.min ? prev.activeStep -1 : prev.activeStep }));
    }

    render() {
        const {classes} = this.props;
        return (
            <MobileStepper
                variant="dots"
                steps={this.props.max}
                position="static"
                activeStep={this.state.activeStep}
                className={classes.root}
                nextButton={
                    <Button size="small" onClick={this.handleNext} disabled={this.state.activeStep === this.props.max}>
                        Next <KeyboardArrowRight/>
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={this.handleBack} disabled={this.state.activeStep === this.props.min}>
                        <KeyboardArrowLeft/> Back
                    </Button>
                }
            />
        )
    }


}

export default PageSelector = withStyles(styles)(PageSelector);

