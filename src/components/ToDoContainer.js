import React, { useState, useEffect } from "react";
import NewToDo from "./NewToDo";
import ToDos from "./ToDos";

function ToDoContainer({ search }) {
    const [toDos, setToDos] = useState([])
    const [sortBy, setSortBy] = useState ("id")
    
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

    const filteredToDos = toDos.filter((toDos) => {
      return toDos.description.toLowerCase().includes(search.toLowerCase());
    });

    const sortedToDos = filteredToDos.sort((a, b) => {
        const nameA = a.name.toUpperCase(); 
        const nameB = b.name.toUpperCase(); 
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
    });

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((toDos) => setToDos(toDos));
    }, []);

    const listedToDos = sortedToDos.map((todo) => {
      return <ToDos
          key={todo.id}
          todo={todo}
          deleteToDo={deleteToDo}
        />
    });

    return (
        <main>
            <ul className="list">{listedToDos}</ul>
            <NewToDo addToDo={addToDo}/>
        </main>
    )
}

export default ToDoContainer;