import React from 'react'
import Input from "../../../Fields/Input/Input";
import './SearchField.scss'

const SearchField = () => (
    <div className='SearchField'>
        <Input type='text'
               name='movie_name'
               placeholder="Movie name"/>
    </div>
)

export default SearchField;