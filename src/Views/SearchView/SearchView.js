import React from 'react'
import Description from "./SearchDescription/Description";
import './SearchView.scss'
import SearchField from "./SearchField/SearchField";

const SearchView = () => (
    <div className='SearchView'>
        <SearchField />
        <Description />
    </div>
);

export default SearchView;