import React from 'react'
import logoImage from '../asserts/images/BUTDW4.png'
import './Logo.scss'

const Logo = () => (
    <div className='Logo'>
      <img className='Logo__Image' src={logoImage} alt="UpToDate"/>
    </div>
);

export default Logo;