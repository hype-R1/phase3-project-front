import React, { useState } from "react";

function Todo({ todo, onDeleteTodo, updateTodo }) {

  const { id, name } = todo;
  const [todos, setTodos] = useState([]);
  const [showForm, setShowForm] = useState(false)
  const [newTodo, setTodo] = useState("")
    

      function handleDelete() {
        
        
  
     
          fetch(`http://localhost:9292/todo/${id}` ,  {
            method: "DELETE",
          })
          onDeleteTodo(id);
        }


      function handleEdit(e) {
          fetch(`http://localhost:9292/todo/${id}` ,  {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({name: newTodo})
          })
            .then(r => r.json())
            .then(updatedTodo => updateTodo(updatedTodo))
        }
          

  
    return (
      <li>       
         <h1>{name} </h1>
       <button onClick={handleDelete}>Delete</button>
       <button onClick={() => setShowForm(!showForm)} >Edit Todo</button>
       { showForm ? <form onSubmit={handleEdit}>
        <input onChange={(e) => setTodo(e.target.value)} value={newTodo} placeholder="input new todo" name="name" type="text" />
        <input  type="submit" />
      </form>: null}
      </li>
      );
  }
      


  export default Todo;


