import React from "react";
import Form from "./Form";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";
import Todo from "./Todo";
import './App.css';
import { useEffect, useState } from "react";

function App() {


  const [todos, setTodos] =  useState([])

  useEffect(() => {
    fetch("http://localhost:9292/todos")
    .then((r) => r.json())
    .then((todos) => setTodos(todos));
  }, []);

  
  const displayTodos = todos.filter((todo) => {
    return todo.name
  })
  
  
  function handleDelete(id) {
    const updatedTodoArray = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodoArray);
  }

  function handleAddTodo(newTodo) {
    const updatedTodoArray = [...todos, newTodo];
    setTodos(updatedTodoArray);
  }

  return (

    <div className="todoapp stack-large">
      <h1 >       
        J & M Todo List Project
      </h1>
      <Form onAddTodo={handleAddTodo}/>
      {/* <FilterButton/> */}
      <TodoList
        todos={displayTodos}
        onDeleteTodo={handleDelete}
      
      
      />
     </div>
    
   
    
  );
}

export default App;