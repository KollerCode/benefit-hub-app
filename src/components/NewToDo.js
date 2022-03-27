import React, { useState } from "react";

function NewToDo({ addToDo }) {
  const [title, setTitle] = useState('');
  // const [input, setInput] = useState('')

  function submitToDo(e) {
    e.preventDefault();
    const formData = {
      userId: "",
      id: "",
      title: title,
      completed: false,   
    };

    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newToDo) => addToDo(newToDo));
  }
  
    return (
      <form onSubmit={submitToDo}>
        <input
          placeholder="Add a To-Do"
          className="toDo-input"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add To-Do</button>
      </form>
    );
  }

export default NewToDo;