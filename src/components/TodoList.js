import React from "react";
import {TodoItem} from "./TodoItem"
const TodoList = (props) =>{
    let list = props.todo.map( todo => (
        <TodoItem key={ todo.text } text={todo.text}></TodoItem>
      )) 
      
    return( <ul>{list}</ul> )
}

export {TodoList};