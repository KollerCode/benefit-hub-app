import React from "react";
import Header from "./components/Header";
import ToDoContainer from "./components/ToDoContainer";

function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <ToDoContainer/>
    </div>
  );
}

export default App;
