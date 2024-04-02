import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Component1 = ({ onNext }) => (
  <div>
    <h2>Step 1</h2><div>
    <p>This is the content of Step 1.</p>

    </div>
    <Link to="/step2">
      <Button variant="contained" color="primary" onClick={onNext}>
        Next
      </Button>
    </Link>
  </div>
);

export default Component1;
