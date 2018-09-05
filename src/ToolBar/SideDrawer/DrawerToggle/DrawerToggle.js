import React from 'react'
import './DrawerToggle.scss'


const DrawerToggle = ({
                          clicked
                      }) => (
    <div className='DrawerToggle'
         onClick={clicked}>
        <div className='DrawerToggle__Item'></div>
        <div className='DrawerToggle__Item'></div>
        <div className='DrawerToggle__Item'></div>
    </div>
);

export default DrawerToggle;