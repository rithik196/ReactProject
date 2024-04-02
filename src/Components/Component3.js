import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Component3 = ({ onNext, onBack }) => (
  <div>
    <h2>Step 3</h2>
    <p>This is the content of Step 3.</p>
    <div>
      <Link to="/step4">
        <Button variant="contained" color="primary" onClick={onNext}>
          Next
        </Button>
      </Link>
      <Link to="/step2">
        <Button variant="contained" color="secondary" onClick={onBack}>
          Back
        </Button>
      </Link>
    </div>
  </div>
);

export default Component3;
