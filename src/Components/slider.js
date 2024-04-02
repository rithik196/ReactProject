import React, { useState } from 'react';
import './slider.css'
function SliderWithInput({ label, min, max, step }) {
  const [value, setValue] = useState((max - min) / 2);

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <label style={{ marginRight: '10px', color: '#625a5a',fontWeight:500}}>{label}</label>
      <input
      className='inp-slide'
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
         title='bcd'
         placeholder={'hdvc'}
        onChange={handleSliderChange}
      
       
      />
      <input
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        title='bcd'
         placeholder={'hdvc'}
        onChange={handleInputChange}
        className='inp-field'
        
      />
    </div>
  );
}

function SliderComponent() {
  return (
    <>
    <div className='sliderdiv'>
      <h5 style={{color:'orange'}}>Create your Offer</h5>
      <div>
      <SliderWithInput  label="Loan Amount" min={10000} max={100000} step={1000} />
      <SliderWithInput label="Tenure" min={0} max={60} step={5} />
      </div>
    </div>
    <div style={{ marginLeft: '10px',paddingTop:'10px', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
    <label style={{ marginLeft: '10px'}}>@Fixed Rate of <b>12.45%</b> </label>
    <button style={{borderRadius:"31px" ,
    width: '13rem',color:'white',fontWeight:'400',
    border: '1px solid grey',
    height: '41px',
    backgroundColor: 'orangered'}}>Apply</button>
  </div>
    </>
  );
}

export default SliderComponent;
