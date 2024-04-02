import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Component4 = ({ onBack }) => (
  <div>
    <h2>Step 4</h2>
    <p>This is the content of Step 4.</p>
    <Link to="/step3">
      <Button variant="contained" color="secondary" onClick={onBack}>
        Back
      </Button>
    </Link>
  </div>
);

export default Component4;
