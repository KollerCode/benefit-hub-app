import React, { useState } from "react";
import Popup from "./Popup";

function ToDos({ toDos, todo, completedToDo, deleteToDo }) {
    const { userId, id, title, completed } = todo;
    const [popupButton, setPopupButton] = useState(false);
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
   <div
     className="rows"
     style={{ cursor: "pointer" }}
     onClick={() => setPopupButton(true)}
   >
     <div
       className={todo.completed ? "toDo-row complete" : "toDo-row"}
       key={id}
     >
       <strong id="title" key={todo.id} onClick={handleComplete}>
         {todo.title}
       </strong>
       <button classname="delete-task" onClick={handleDelete}>
         Bye Task!
       </button>
     </div>
     <Popup trigger={popupButton} closeButtonTrigger={setPopupButton}>
       <h2>Details:</h2>
       <h3>ID: {todo.id}</h3>
       <h3>userID: {todo.userId}</h3>
       <h3>Title: {todo.title}</h3>
     </Popup>
   </div>
 );
}

export default ToDos;
