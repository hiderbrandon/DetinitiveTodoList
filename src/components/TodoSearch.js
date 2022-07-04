import React from "react";

const TodoSearch = ()=>{
    const onSearchValueChange = (event)=>{
        console.log( event.target.value )
    }
    return(
        <input placeholder="cebolla" 
            onChange={onSearchValueChange}
        />
    )
}

export {TodoSearch};