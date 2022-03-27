import React, { useState } from "react";

function ToDos({ toDos, todo, completedToDo, deleteToDo }) {
    const { userId, id, title, completed } = todo;
    // const [isComplete, setIsComplete] = useState(true);
//   const navigate = useNavigate();

  const handleComplete= () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed: true,
      }),
    })
      .then((r) => r.json())
      .then((toDos) => {

      completedToDo(toDos.id);
      });
  };
  console.log(handleComplete)

  function handleDelete() {
   fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
     method: "DELETE",
   });
    deleteToDo(id);
  }

 return (
   <div>
     <div
       className={todo.completed ? "toDo-row complete" : "toDo-row"}
       key={id}
       //  onClick={() => handleComplete(todo.id)}
     >
       <strong key={todo.id} onClick={handleComplete}>
         {todo.title}
       </strong>
       <div></div>
       <button classname="delete-task" onClick={handleDelete}>
         Bye Task!
       </button>
     </div>
   </div>
 );
}

export default ToDos;
