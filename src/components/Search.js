import React, { useState} from "react";

function Search({ onSearch }) {
  const [currentSearch, setCurrentSearch] = useState("")
  
  function submitToDo(e) {
    e.preventDefault();
    onSearch(currentSearch)
  }

  return (
    <form className="searchbar" submitToDo={submitToDo}>
      <input
        type="text"
        id="search"
        placeholder="search through to-do's"
        value={currentSearch}
        onChange={(e) => setCurrentSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;