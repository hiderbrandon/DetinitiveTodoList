import React from "react";


const TodoSearch = ({searchValue, setSearchValue}) => {
        
    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue( event.target.value )
    }
    return [(
        <input placeholder="cebolla"
            value={searchValue}
            onChange={onSearchValueChange}
        />),
        <p>{searchValue}</p>        
    ]
}

export { TodoSearch };