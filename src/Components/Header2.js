import React, { useState } from 'react';
import Button from '@mui/material/Button';

import cust from '../logo/cust.png';
import './Header2.css';


  
const Header2 = () => {
  
    const [showValue, setShowValue] = useState(false);
  
    const handleButtonClick = () => {
      setShowValue(!showValue);
    };
  return (
    <>
    <div className='outerdiv'>
        <div className='innerdiv'>
            <img className='cust'  src={cust} alt="" />
            <span>
                <span>Welcome,</span> <br />
               <span>Jason Bourne</span> 
            </span>

            
        </div>
        <div><span>Total Balance</span>
              
              <div>
      <Button onClick={handleButtonClick} style={{ background: 'transparent', textTransform: 'none', color: 'blue' ,outline :'none'}}>
        {showValue ? '14567' : 'Show'}
      </Button>
      {showValue && (
        <div style={{ marginTop: '10px' }}>
          
        </div>
      )}
    </div>

            </div>
    </div>
    </>
  )
}

export default Header2