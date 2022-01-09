import React from "react";
import logo from './logo.svg';
import Form from "./Form";
import FilterButton from "./FilterButton";
import Todo from "./Todo";
import './App.css';
import { useState, useEffect } from "react";

function App() {


  const [todos, setTodos] =  useState([])

  useState(() => {
    fetch("http://localhost:9292/todos")
    .then((r) => r.json())
    .then((data) => setTodos(data));
  }, []);
  
  
  
    const taskList = todos.map(todos => (
      <Todo
        name={todos.todo_name}
        id={todos.id}
        status={todos.status}
        key={todos.id}
          
        />
      )
    );

    function handleEdit(e) {
      e.preventDefault();
      console.log('You clicked edit.');
    }

    function handleDelete(e) {
      e.preventDefault();
      console.log('You clicked delete.');
    }

    function handleCheck(e) {
      e.preventDefault();
      console.log('You clicked checked.');
    }
  


  
  
  

  return (

    <div className="todoapp stack-large">
      <h1 >
        
        J & M Todo List Project
        
      </h1>

      <Form />

      <FilterButton/>
      {taskList}
     

     </div>
    
   
    
  );
}

export default App;
