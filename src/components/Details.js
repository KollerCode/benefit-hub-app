import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import ToDos from "./ToDos";

function Details() {
  //     let params = useParams();
  //   let location = useLocation();
const [toDos, setToDos] = useState([])
  console.log(toDos);

  // let { id } = useParams();
  // console.log(id);

  const listedToDos = toDos.map((toDo) => {
    return toDo = { toDo }
  })

  function goHome() {
    window.location.replace(`http://localhost:3000`);
  }

  return (
    <div>
      <div className="details">
        <h2>Details: </h2>
        <h3>
  {useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((toDos) => setToDos(toDos));
  }, [])}
        </h3>
        <h3>ID: {toDos.id}</h3>
        <h3>Title: {toDos.title}</h3>

        {/* <h3>ID: {toDo.id}</h3>
          <h3>userID: {toDo.userId}</h3>
          <h3>Title: {toDo.title}</h3> */}

        <button onClick={goHome}>Close this Page</button>
      </div>
    </div>
  );
}

export default Details;
