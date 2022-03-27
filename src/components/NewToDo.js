import React, { useState } from "react";
import { Form, FormControl, Button, FormGroup } from "react-bootstrap";

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
      <Form onSubmit={submitToDo}>
        <FormGroup class="mb-3">
          <FormControl
            placeholder="Add a To-Do"
            className="form-control"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
          <Button type="submit" class="btn btn-primary mb-3">
            Add To-Do
            </Button>
        </FormGroup>
      </Form>
    );
  }

export default NewToDo;