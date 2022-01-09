import React, { useState, useEffect } from "react";





function Todo(todos) {

    


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
      <li className="todo stack-small">
       <div className="c-cb">
           <input id={todos.id} onClick={handleCheck} type="checkbox" defaultChecked={todos.status} />
           <label className="todo-label" htmlFor={todos.id}>
               {todos.name}
           </label>
        </div>
        <div className="btn-group">
          <button onClick={handleEdit} type="button" className="btn">
            Edit <span className="visually-hidden">{todos.name}</span>
          </button>
          <button onClick={handleDelete} type="button" className="btn btn__danger">
            Delete <span className="visually-hidden">{todos.name}</span>
          </button>
        </div>
      </li>
    );
  }


  export default Todo;








    
