import React from 'react'
import './searchbar.scss'

const SearchBar = () => {
    return (
        <div className="search_bar">
            <input type="search"/>
            <input type="submit" value="search"/>
        </div>
    )
}

export default SearchBar
