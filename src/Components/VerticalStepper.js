import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StepComponent1 from '../Components/Component1';
import StepComponent2 from '../Components/Component2';
import StepComponent3 from '../Components/Component3';
import StepComponent4 from '../Components/Component4';
import CheckIcon from '@mui/icons-material/Check';
import { Stepper, Step, StepLabel, StepConnector } from '@mui/material';
import { stepConnectorClasses } from '@mui/material/StepConnector';

import '../Components/stepper.css'; // Import your CSS file for styling
import img from '../logo/image.png'
import '../Components/stepper.css';
const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4']; // Define your steps here

const CustomConnector = ({ activeStep }) => (
  <StepConnector
    sx={{
      [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
      },
      [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
          borderColor: 'orange', // Set color for active step line
        },
      },
      [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
          borderColor: 'orange', // Set color for completed step line
        },
      },
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: 'grey', // Set default color for connector line
        borderWidth:3,
        minHeight:60,
        marginLeft:'4px'
        
      },
    }}
  />
);

const CustomStepLabel = ({ active, completed }) => {
  let circleClassName = 'circle';

  if (active || completed) {
    circleClassName += ' filled';
  }

  return <div className={circleClassName}>
    {completed && <CheckIcon className="checkIcon" />}
  </div>;
};

const VerticalStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    
    <Router>
      <div className="root">
        <div className="grid-container">
          <div className="stepperContainer">
            <Stepper orientation="vertical" activeStep={activeStep} connector={<CustomConnector activeStep={activeStep} />} style={{ width: 400 }}>
              {steps.map((label, index) => (
                <Step key={index}>
                <StepLabel StepIconComponent={() => <CustomStepLabel active={activeStep === index} completed={activeStep > index} />}  >
                    <img src={img} alt="Step Icon" style={{ marginRight: 10 }} /> {/* Add image here with spacing */}
                    <span>{label}</span>
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
          <div className="contentContainer">
            <Routes>
              <Route
                path="/step1"
                element={<StepComponent1 onNext={handleNext} />}
              />
              <Route
                path="/step2"
                element={<StepComponent2 onNext={handleNext} onBack={handleBack} />}
              />
              <Route
                path="/step3"
                element={<StepComponent3 onNext={handleNext} onBack={handleBack} />}
              />
              <Route
                path="/step4"
                element={<StepComponent4 onBack={handleBack} />}
              />
              <Route
                path="/"
                element={<Navigate to="/step1" />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default VerticalStepper;
