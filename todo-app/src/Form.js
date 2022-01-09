import React from "react";
import { useState } from "react";


function Form( onAddTodo) {

  const [form, setForm] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    console.log('You clicked submit.');
  }


  
  return (
    <form >
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What ya got ToDo?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
      />
      <button onClick={handleSubmit} type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;