import React, { useState } from "react";
import Header from "./components/Header";
import ToDoContainer from "./components/ToDoContainer";
import Search from "./components/Search";

function App() {
 const [inputText, setText] = useState("");
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
          <form className="searchbar">
            <input
              type="text"
              id="search"
              placeholder="search through to-do's"
              // value={search}
              onChange={textConverter}
            />
            <button type="submit">🔍</button>
          </form>
        </div>
        {/* <Search text={inputText} /> */}
        <ToDoContainer input={inputText}/>
      </div>
    </div>
  );
}

export default App;
