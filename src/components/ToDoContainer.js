import React, { useState, useEffect } from "react";
import NewToDo from "./NewToDo";
import ToDos from "./ToDos";
import Search from "./Search";

function ToDoContainer() {
    const [toDos, setToDos] = useState([])
    const [sortByAscending, setSortAscending] = useState("title")
    const [sortByDescending, setSortDescending] = useState("title");
    
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
    console.log(filteredToDos)

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
    console.log(sortedToDos)
    const toggleSort = () => {

    }

    const sortAscending = () => {
        sortedToDos.sort((a, b) => a - b);   
        setSortAscending((sortByAscending) => !sortByAscending);
    }
    console.log(sortAscending)
    
    const sortDescending = () => {
        filteredToDos.sort((a, b) => a - b).reverse();
        setSortDescending((sortByDescending) => !sortByDescending)
    }


    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((toDos) => setToDos(toDos));
    }, []);

    const listedToDos = toDos.map((todo) => {
      return <ToDos
          key={todo.id}
          todo={todo}
          deleteToDo={deleteToDo}
        //   onUpdateToDo={updatedToDos}
        />
    });

    return (
      <main>
        <NewToDo addToDo={addToDo} />
        <Search />
        <button onClick={sortAscending}>asc</button>
        <button onClick={sortDescending}>desc</button>
        <ul className="list">{listedToDos}</ul>
      </main>
    );
}

export default ToDoContainer;