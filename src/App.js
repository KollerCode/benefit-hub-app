import React from "react";
import Header from "./components/Header";
import ToDoContainer from "./components/ToDoContainer";

function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <div className="todo-app">
        <ToDoContainer />
        </div>
    </div>
  );
}

export default App;
