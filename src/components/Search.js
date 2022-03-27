import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

// function Search(props) {

  
//    useEffect(() => {
//      fetch("https://jsonplaceholder.typicode.com/todos")
//        .then((response) => response.json())
//        .then((toDos) => setToDos(toDos));
//    }, []);
  
//   function handleSubmit(e) {
//     e.preventDefault();
//     setSearch(e.target.value)
//   }
//    let setText= (e) => {
//      let lowerCase = e.target.value.toLowerCase();
//      setInputText(lowerCase);
//    };
//   if (search.length > 0) {
//   toDos.filter((toDo) => {
//     return toDo.title.match(search);
//   });
// }
// return (
//           <div class="pb-2">
//               <div class="card">
//                 <div class="card-body">
//                   <div class="d-flex flex-row align-items-center">
//                     <input type="text" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Add new...">
//                     <a href="#!" data-mdb-toggle="tooltip" title="Set due date"><i class="fas fa-calendar-alt fa-lg me-3"></i></a>
//                     <div>
//                       <button type="button" class="btn btn-primary">Add</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//     )
// // }

// export default Search;