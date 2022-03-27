import React, { useState } from "react";
import Header from "./components/Header";
import ToDoContainer from "./components/ToDoContainer";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";


function App() {
  const [inputText, setText] = useState("");
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((toggle) => !toggle);
  }
  const appClass = toggle ? "sort-ascend" : "sort-descend";

 const textConverter = (e) => {
   //convert input text to lower case
   let lowerCase = e.target.value.toLowerCase();
   setText(lowerCase);
 };
  
  return (
    <div>
      <header>
        <Header />
      </header>
      <div className="todo-app">
        <div>
          <Form className="searchbar">
            <FormGroup class="mb-3">
              <FormControl
                type="text"
                className="form-control form-control-lg"
                aria-label=".form-control-lg example"
                id="search"
                placeholder="🔍 Search through To-Do's"
                // value={search}
                onChange={textConverter}
              />
              {/* <Button type="submit" class="btn btn-primary btn-lg">
                🔍
              </Button> */}
            </FormGroup>
          </Form>
        </div>
        {/* <Search text={inputText} /> */}
        <ToDoContainer input={inputText} />
      </div>
    </div>
  );
}

export default App;
