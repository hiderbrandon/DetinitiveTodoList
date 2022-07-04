import './App.css';
import React from "react"
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import {CreateTodoButton} from './components/CreateTodoButton'
const todo = [
  {text:"catar con gabe" , complete:false },

  {text:"cantar el bebitu fiu fiu " , complete:false },
]

function App() {
  return (
    <React.Fragment>

      <TodoCounter></TodoCounter>
      <TodoSearch></TodoSearch>
      <TodoList todo={ todo }></TodoList>
      <CreateTodoButton></CreateTodoButton>

    </React.Fragment>
  );
}

export default App;
