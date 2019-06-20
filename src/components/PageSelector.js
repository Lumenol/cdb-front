import React, {Component} from 'react';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {withStyles} from '@material-ui/core/styles';
import connect from "react-redux/es/connect/connect";
import {getPageSelectorState} from "../redux/selectors";
import {nextPage, previousPage} from "../redux/PageSelector";

const styles = {
    root: {
        maxWidth: 400,
        flexGrow: 1,
    }
};



class PageSelector extends Component {


    state = {
        print : false
    };

    onMouseOver = () => {
        console.log("on mouse over"+this.state.print)
        this.setState({
            print:true
        })
    };

    onMouseOut = () => {
        console.log("onMouseOut"+this.state.print)
        this.setState({
            print: false
        })
    };

    render() {
        const {classes} = this.props;
        return (
            <div onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                {this.state.print ?
                    <div>
                        {this.props.page}
                    </div> :
                    null
                }

                <MobileStepper

                    variant="dots"
                    steps={this.props.maxStep+1}
                    position="static"
                    activeStep=
                        {
                            this.props.page < this.props.midStep ?
                            this.props.page :
                            (
                                 this.props.maxPage - this.props.midStep < this.props.page  ?
                                 this.props.maxStep - (this.props.maxPage - this.props.page) :
                                 this.props.midStep
                            )
                        }
                    className={classes.root}
                    nextButton={
                        this.state.print ?
                        <Button size="small" onClick={this.props.clickNextPageButton} disabled={this.props.page === this.props.maxPage}>
                            <KeyboardArrowRight/>
                        </Button> : null
                    }
                    backButton={
                        this.state.print ?
                        <Button size="small" onClick={this.props.clickPreviousPageButton} disabled={this.props.page === this.props.minPage}>
                            <KeyboardArrowLeft/>
                        </Button> : null
                    }
                />
            </div>

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

export default PageSelector = connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(PageSelector));


