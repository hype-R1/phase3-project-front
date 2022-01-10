import React, { useState } from "react";

function Todo({ todo, onDeleteTodo }) {

  const { id, name } = todo;
  const [todos, setTodos] = useState([]);
    

      function handleDelete() {
        
        
  
     
          fetch(`http://localhost:9292/todo/${id}` ,  {
            method: "DELETE",
          })
          onDeleteTodo(id);
        }
      function handleEdit() {
        
        
  
     
          fetch(`http://localhost:9292/todo/${id}` ,  {
            method: "POST",
          })
          (id);
        }

  
    return (
      <li>       
         <h1>{name} </h1>
       <button onClick={handleDelete}>Delete</button>
       <button onClick={handleEdit}>Edit</button>
      </li>
      );
  }
      


  export default Todo;


