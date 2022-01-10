import React from "react";
import { useState } from "react";
import TodoList from "./TodoList"
import Todo from "./Todo"



function Form({ addNewTodo }) {
  const [todos, setTodos] = useState("");

  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [id, setId] = useState("");

  function handleAddTodo(newTodo) {
    const updatedTodo = [...todos, newTodo];
    setTodos(updatedTodo)
  }
  

  function handleSubmit(e) {
    // e.preventDefault();

    fetch('http://localhost:9292/todos', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ 
        name:name,
        status: status,
        list_id: id
        
      }),
      })
      .then(r => r.json())
      .then(newTodo => handleAddTodo(newTodo))
    }
        
     
    
  return (

    <div className="new-plant-form">
      <h2>New Todo</h2>
      <form onSubmit={handleSubmit} >
        <input 
          onChange={e => setName(e.target.value)} 
          type="text" 
          name="name" 
          value={name}
          placeholder="Todo" 
        />
        <input id={id} type="checkbox"  />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}


export default Form;