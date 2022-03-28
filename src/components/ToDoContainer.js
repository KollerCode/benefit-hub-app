import React, { useState, useEffect } from "react";
import NewToDo from "./NewToDo";
import ToDos from "./ToDos";
// import Search from "./Search";

function ToDoContainer({ input }) {
  const [toDos, setToDos] = useState([])
  // const [sortBy, setSortBy] = useState("id");
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((toDos) => setToDos(toDos));
    }, []);
    
    const filteredToDos = toDos.filter((toDos) => {
    return toDos.title;
    });
  
  //   const sortSearchFindings = filteredToDos.sort((a, b) => {
  //   if (sortBy === "id") {
  //     return a.id - b.id
  //   } else {
  //     return a.title.localeCompare(b.title)
  //   }
  // })
  
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
  
  // const listedToDos = toDos.map((todo) => {
  //   return (
  //     <ToDos
  //       key={todo.id}
  //       todo={todo}
  //       deleteToDo={deleteToDo}
  //       completedToDo={completedToDo}
  //     />
  //   )
  // })

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
        <h1 className="container-title">What tasks need to be accomplished?</h1>
        {/* <Search todo={filteredToDos}/> */}
        <NewToDo addToDo={addToDo} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          style={{ cursor: "pointer" }}
          onClick={sortAscending}
          class="sort-ascend"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M10.082 5.629 9.664 7H8.598l1.789-5.332h1.234L13.402 7h-1.12l-.419-1.371h-1.781zm1.57-.785L11 2.687h-.047l-.652 2.157h1.351z"
          />
          <path d="M12.96 14H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V14zM4.5 2.5a.5.5 0 0 0-1 0v9.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L4.5 12.293V2.5z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          style={{ cursor: "pointer" }}
          class="sort-descend"
          viewBox="0 0 16 16"
          onClick={sortDescending}
        >
          <path d="M12.96 7H9.028v-.691l2.579-3.72v-.054H9.098v-.867h3.785v.691l-2.567 3.72v.054h2.645V7z" />
          <path
            fill-rule="evenodd"
            d="M10.082 12.629 9.664 14H8.598l1.789-5.332h1.234L13.402 14h-1.12l-.419-1.371h-1.781zm1.57-.785L11 9.688h-.047l-.652 2.156h1.351z"
          />
          <path d="M4.5 13.5a.5.5 0 0 1-1 0V3.707L2.354 4.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L4.5 3.707V13.5z" />
        </svg>
        {/* <ul className="list">{listedToDos}</ul> */}
        <ul className="list">
          {filteredData.map((todo) => (
            <ToDos
              key={todo.id}
              todo={todo}
              deleteToDo={deleteToDo}
              completedToDo={completedToDo}
            />
          ))}
        </ul>
      </main>
    );
}

export default ToDoContainer;