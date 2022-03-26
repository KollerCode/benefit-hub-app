import React, { useState, useEffect } from "react";
import NewToDo from "./NewToDo";
import ToDos from "./ToDos";
import Search from "./Search";

function ToDoContainer() {
    const [toDos, setToDos] = useState([])
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((toDos) => setToDos(toDos));
    }, []);
  
    const filteredToDos = toDos.filter((toDos) => {
    return toDos.title;
    });
  
    function deleteToDo(id) {
      const updatedToDos = toDos.filter(
        (todo) => todo.id !== id
      );
      setToDos(updatedToDos);
    }

    function addToDo(newToDo) {
      const updatedToDos = [newToDo, ...toDos];
      setToDos(updatedToDos);
    }
  
  function completedToDo(id) {
    const updatedToDos = toDos.map(toDo => {
      if (toDo.id === id) {
          toDo.isCompleted = !toDo.isCompleted
      }
      return toDo
    })
    setToDos(updatedToDos)
    }

  function sortAscending() {
         const sortedToDos = filteredToDos.sort((a, z) => {
           const aToDo = a.title;
           const zToDo = z.title;
           if (aToDo < zToDo) {
             return -1;
           }
           if (aToDo > zToDo) {
             return 1;
           }
           return 0;
         });
    setToDos(sortedToDos);
    console.log(sortedToDos)
    }

  function sortDescending() {
      filteredToDos.sort()
      const sortedToDos = filteredToDos.reverse();
    setToDos(sortedToDos)
    console.log(sortedToDos);
    }
    
    const listedToDos = toDos.map((todo) => {
      return <ToDos
          key={todo.id}
          todo={todo}
          onDeleteToDo={deleteToDo}
          onUpdateToDo={completedToDo}
        />
    });

    return (
      <main>
        <NewToDo addToDo={addToDo} />
        <Search />
        <button onClick={sortAscending}>asc</button>
        <button onClick={sortDescending}>desc</button>
        <h1>What tasks need to be accomplished?</h1>
        <ul className="list">{listedToDos}</ul>
      </main>
    );
}

export default ToDoContainer;