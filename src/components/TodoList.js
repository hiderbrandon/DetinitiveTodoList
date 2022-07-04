import React from "react";
import {TodoItem} from "./TodoItem"
const TodoList = (props) =>{
    let list = props.todo.map( atodo => (
        <TodoItem key={ atodo.text } text={atodo.text}></TodoItem>
      )) 
      
    return( <ul>{list}</ul> )
}

export {TodoList};