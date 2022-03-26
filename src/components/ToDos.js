import React, { useState } from "react";

function ToDos({ todo, onUpdateToDo, onDeleteToDo }) {
    const { userId, id, title, completed } = todo;
    const [isComplete, setIsComplete] = useState(true);
//   const navigate = useNavigate();

  const completedToDo = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos${id}`, {
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

        onUpdateToDo(toDos.id);
      });
  };

  function handleDelete() {
   fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
     method: "DELETE",
   });
    onDeleteToDo(id);
  }

  return (
    <div>
      <strong>{title}</strong>
      <div
        className={todo.isComplete ?
        'toDo-row complete' : 'toDo-row'}
        key={id}
      ></div>
        <div
          key={todo.id} 
          onClick={() => completedToDo(todo.id)}>
        </div>
      <button classname="delete-task" onClick={handleDelete}>
        Bye Task!
      </button>
    </div>
  );
}

export default ToDos;
