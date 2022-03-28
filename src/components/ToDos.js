import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
 import { useNavigate } from "react-router-dom";

function ToDos({ toDos, todo, completedToDo, deleteToDo }) {
  const { userId, id, title, completed } = todo;
  const [popupButton, setPopupButton] = useState(false);
 

  const navigate = useNavigate();

  function openItem() {
    console.log(todo);
    navigate('/details')
    // navigate(`/todo/${todo.id}`, { replace: true, state: todo });
  }

  // let history = useNavigate();

  // const openItem = e => {
  //   history.push({
  //     pathname: `http://localhost:3000/todo/${todo.id}`,
  //     state: { todo: todo }
  //   });
  // }
  

  const handleComplete = () => {
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
  console.log(handleComplete);

  function handleDelete() {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    });
    deleteToDo(id);
  }
  // function renderTooltip(props) {
  //   <Tooltip {...props} id="tooltip-top">
  //     Done
  //   </Tooltip>
  // }

  return (
    // <Link to={`/todo/${todo.id}`} state={{ data: todo }}>
    <div className="rows">
      <div
        className={todo.completed ? "toDo-row complete" : "toDo-row"}
        key={id}
      >
        <strong
          id="title"
          key={todo.id}
          style={{ cursor: "pointer" }}
          onClick={openItem}
        >
          {todo.title}
        </strong>
        <div className="icons">
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip id="tooltip-top">Done</Tooltip>}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="check-icon"
              viewBox="0 0 16 16"
              variant="success"
              id="title"
              key={todo.id}
              onClick={handleComplete}
            >
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
            </svg>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip id="tooltip-top">Remove</Tooltip>}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="delete-icon"
              viewBox="0 0 16 16"
              onClick={handleDelete}
              variant="success"
            >
              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
          </OverlayTrigger>
        </div>
      </div>
      {/* <Popup trigger={popupButton} closeButtonTrigger={setPopupButton}>
          <h2>Details:</h2>
          <h3>ID: {todo.id}</h3>
          <h3>userID: {todo.userId}</h3>
          <h3>Title: {todo.title}</h3>
        </Popup> */}
    </div>
    // </Link>
  );
}

export default ToDos;
