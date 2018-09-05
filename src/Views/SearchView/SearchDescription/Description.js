import React from 'react'
import './Description.scss'

const Description = () => (
    <div className='Description'>
        <div className='Description__Text'>
            <h3 className='Description__Item'>Type movie or TV series name to always be</h3>
            <h3 className={['Description__Item', 'Description__Item_highlighted'].join(" ")}> UP TO DATE </h3>
            <h3 className='Description__Item'> with most expected premiers!</h3>
        </div>
    </div>
);

export default Description;