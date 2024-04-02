import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Component2 = ({ onNext, onBack }) => (
  <div>
    <h2>Step 2</h2>
    <p>This is the content of Step 2.</p>
    <div>
      <Link to="/step3">
        <Button variant="contained" color="primary" onClick={onNext}>
          Next
        </Button>
      </Link>
      <Link to="/step1">
        <Button variant="contained" color="secondary" onClick={onBack}>
          Back
        </Button>
      </Link>
    </div>
  </div>
);

export default Component2;

