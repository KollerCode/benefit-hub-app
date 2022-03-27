import React, { useState, useEffect } from "react";
import NewToDo from "./NewToDo";
import ToDos from "./ToDos";
// import Search from "./Search";

function ToDoContainer({ input } ) {
  const [toDos, setToDos] = useState([])
  const [sortBy, setSortBy] = useState("id");
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((toDos) => setToDos(toDos));
    }, []);
    
    const filteredToDos = toDos.filter((toDos) => {
    return toDos.title;
    });
  
    const sortSearchFindings = filteredToDos.sort((a, b) => {
    if (sortBy === "id") {
      return a.id - b.id
    } else {
      return a.title.localeCompare(b.title)
    }
  })
  
    function deleteToDo(id) {
      const deletedToDos = toDos.filter(
        (todo) => todo.id !== id
      );
      setToDos(deletedToDos);
    }

  function addToDo(newToDo) {
    // if (!newToDo.text || /^\s*$/.test(newToDo.text)) {
    //   return
    // }
      const newtoDos = [...toDos, newToDo];
      setToDos(newtoDos);
    }
  
    function completedToDo(id) {
      const updatedToDos = toDos.map((toDo) => {
        if (toDo.id === id) {
          return { ...toDo, completed: true };
        } else {
          return toDo;
        }
      });
      setToDos(updatedToDos);
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
      const sortReverse = sortedToDos.reverse();
    setToDos(sortedToDos)
    console.log(sortReverse);
    }
  
  const listedToDos = toDos.map((todo) => {
    return (
      <ToDos
        key={todo.id}
        todo={todo}
        deleteToDo={deleteToDo}
        completedToDo={completedToDo}
      />
    )
  })

  const filteredData = toDos.filter((todo) => {
   if (input === "") {
     return (
       <ToDos
         key={todo.id}
         todo={todo}
         deleteToDo={deleteToDo}
         completedToDo={completedToDo}
       />
     );
   }
   else {
     return todo.title.includes(input);
   }
 });
    return (
      <main>
        {/* <Search todo={filteredToDos}/> */}
        <NewToDo addToDo={addToDo} />
        <button onClick={sortAscending}>asc</button>
        <button onClick={sortDescending}>desc</button>
        <h1>What tasks need to be accomplished?</h1>
        <ul className="list">{listedToDos}</ul>
        {/* <ul className="list">
          {filteredData.map((todo) => (
            <ul key={todo.id}>{todo.title}</ul>
          ))}
        </ul> */}
      </main>
    );
}

export default ToDoContainer;