import React from 'react'
import logo from '../logo/NewgenLogo.jpg'
import Button from '@mui/material/Button';
import './header.css';
const Header = () => {
  return (
    <div className='first-div'>
      <img className='newgenlogo' src={logo} alt="" />
      <Button className='btn' variant='Contained'>Contact Us</Button>
    </div>
  )
}

export default Header
