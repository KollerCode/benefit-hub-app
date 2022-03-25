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
      return toDos.title
    });

    const sortedToDos = filteredToDos.sort((a, b) => {
        const toDoA = a.name; 
        const toDoB = b.name; 
        if (toDoA < toDoB) {
            return -1;
        }
        if (toDoA > toDoB) {
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
        //   onUpdateToDo={updatedToDos}
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