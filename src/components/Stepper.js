import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import UserInformationCollector from './UserInformationCollector'
import Paper from 'material-ui/Paper';

/**
 * HorizontalLinearStepper switches between the components that
 * get the information used to calculate the TDEE score 
 */
export default class HorizontalLinearStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 4,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Welcome to the TDEE calculator';
      case 1:
        return <UserInformationCollector />;
      case 2:
        return 'Your Activities';
      case 3:
        return 'Your Goal';
      case 4:
        return 'Your Results';
      default:
        return 'Something went wrong!';
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};
    const paperStyle = {
      height: '100%',
      width: '100%',
      //margin: 10,
      textAlign: 'center',
      display: 'inline-block',
    };


    return (
      <Paper style={paperStyle} zDepth={2}>
      <div style={{height: '400px', width: '800px', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Welcome</StepLabel>
          </Step>
          <Step>
            <StepLabel>Information</StepLabel>
          </Step>
          <Step>
            <StepLabel>Activities</StepLabel>
          </Step>
          <Step>
            <StepLabel>Goals</StepLabel>
          </Step>
          <Step>
            <StepLabel>Results</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
              <a
                href="#reset"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
              >
                Start Again
              </a> 
          ) : (
            <div>
              {this.getStepContent(stepIndex)}
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onClick={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 4 ? 'Finish' : 'Next'}
                  primary={true}
                  onClick={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      </Paper>
    );
  }
}