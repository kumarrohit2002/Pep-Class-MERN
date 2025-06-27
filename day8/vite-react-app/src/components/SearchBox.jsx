import React, { useState } from 'react'


// component is rerender only when the state change Or props change

// state variables are given to use by react
//if the value the state variable change --> state of the component has changed


const SearchBox = () => {
    const [monitor,remote]=useState('');

    const handleSearch=(e)=>{
        remote(e.target.value);
        console.log(monitor) //Noted !!!
    }

    return (
        <div>
            <input type="text" placeholder='search' onKeyUp={handleSearch} />
            <h2>{monitor}</h2>
        </div>
    )
}

export default SearchBox;