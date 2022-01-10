import React from "react";
import Todo from "./Todo";


 function TodoList({ todos, onDeleteTodo, onUpdateTodo }) {

    return (  
        <ul className="cards">
         {todos.map((todo) => {
          return (
            <Todo
                name={todo.name}
                id={todo.id}
                status={todo.status}
                key={todo.id}
                onDeleteTodo={onDeleteTodo}
                onUpdateTodo={onUpdateTodo}
                todo={todo}
            />
            );
        })}
     </ul>
    );
}


  export default TodoList;