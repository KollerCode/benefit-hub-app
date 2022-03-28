import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
import ToDos from "./ToDos";
import { useNavigate } from "react-router-dom";

function Details(props) {
  //     let params = useParams();
  //   let location = useLocation();
const [home, setHome] = useState([])
  console.log(home);

  // let { id } = useParams();
  // console.log(id);

  // const listedToDos = toDos.map((toDo) => {
  //   return toDo = { toDo }
  // })
const navigate = useNavigate();

// function goHome() {
//   navigate("/");
// }
  
  function goHome() {
    // const replaceWindow = window.location.replace(`http://localhost:3000`);
    // setHome(replaceWindow)
    // window.close();
      navigate("/");
  }

  return props.trigger ? (
    <div>
      <div className="details">
        <div className="popup-inner">
          {props.children}
          <button onClick={() => props.closeButtonTrigger(false)}>
            Close this Page
          </button>
        </div>
      </div>
      {/* <h2>Details: </h2>
        <h3>
  {useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((toDos) => setToDos(toDos));
  }, [])}
        </h3>
        <h3>ID: {toDos.id}</h3>
        <h3>Title: {toDos.title}</h3> */}

      {/* <h3>ID: {toDo.id}</h3>
          <h3>userID: {toDo.userId}</h3>
          <h3>Title: {toDo.title}</h3> */}
    </div>
  ) : (
    ""
  );
}

export default Details;
