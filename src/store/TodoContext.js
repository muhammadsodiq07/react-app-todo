import React, { useReducer, useState } from "react";
import Todo from "./Todo";

function TodoContext() {
  const [name, setname] = useState();

  const reducer = (state, action) => {

    switch(action.type) {

      case "ADD":
        return [...state,{id:Date.now(), name: action.payload.name}]
      default: return state  
    }

    return state;
  };

  const handlerSubmit = () => {
    dispatch({type: "ADD", payload: {name: name}}) 
  };
  const [todo, dispatch] = useReducer(reducer, []);

 

  return (
    <>
      <div className="container">
        <div className="d-flex">
          <input
            onChange={(e) => setname(e.target.value)}
            type="text"
            value={name}
          />

          <button
            onClick={handlerSubmit}
            type="submit"
            className="btn btn-danger"
          >
            Add
          </button>
        </div>
        <hr/>

        <ul className="list-group">
          {todo.map(value => {
            return (
            <>
              <li className="list-group-item" key={value.id}>
                  <Todo
                  value={value}
                  />
              </li>
            </>)
          })}
        </ul>
      </div>
    </>
  );
}

export default TodoContext;
