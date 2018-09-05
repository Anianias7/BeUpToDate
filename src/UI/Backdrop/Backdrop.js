import React from 'react'
import './Backdrop.scss'

const Backdrop = ({
                      clicked,
                      show
                  }) => {
    return show ? <div className='Backdrop'
                onClick={clicked}>
    </div> : null
};

export default Backdrop;