import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StepComponent1 from '../Components/Component1';
import StepComponent2 from '../Components/Component2';
import StepComponent3 from '../Components/Component3';
import StepComponent4 from '../Components/Component4';
import CheckIcon from '@mui/icons-material/Check';
import '../Components/vs.css'; // Import your CSS file for styling


const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4']; // Define your steps here

const HorizontalStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <Router>
      <div className="root">
        <div className="stepperContainer">
          <div className="stepper horizontal">
            {steps.map((label, index) => (
              <div key={index} className={`step ${index === activeStep ? 'active' : ''}`}>
                {index !== 0 && <div className="line" />}
                <div className={`circle ${index < activeStep ? 'filled' : ''}`}>
                  {index < activeStep ? <CheckIcon className="checkIcon" /> : index + 1}
                </div>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="contentContainer">
          <Routes>
            <Route path="/step1" element={<StepComponent1 onNext={handleNext} />} />
            <Route path="/step2" element={<StepComponent2 onNext={handleNext} onBack={handleBack} />} />
            <Route path="/step3" element={<StepComponent3 onNext={handleNext} onBack={handleBack} />} />
            <Route path="/step4" element={<StepComponent4 onBack={handleBack} />} />
            <Route path="/" element={<Navigate to="/step1" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default HorizontalStepper;
