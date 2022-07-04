import './App.css';
import React ,{useState} from "react"
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import {CreateTodoButton} from './components/CreateTodoButton'
const todos = [
  {text:"necom" , complete:false },
  {text:"cantar" , complete:false },
  {text:"xxxe" , complete:false },
  {text:"ñññxx@.z " , complete:false},
]

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [todo, setTodo] = useState(todos);
  
  /*busqueda y recomendacion entre las todos */
  let searchedValues = []

  if(searchValue.length < 1 ){
    searchedValues = todo
  }
  else{
    searchedValues = todo.filter( todo => { return todo.text.includes(searchValue) })

  }
  

  return (
    <React.Fragment>

      <TodoCounter></TodoCounter>
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      ></TodoSearch>
      <TodoList todo={searchedValues}></TodoList>
      <CreateTodoButton></CreateTodoButton>

    </React.Fragment>
  );
}

export default App;
