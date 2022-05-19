import React from "react";

function Tolist(props) {


  
  return (
    <form onSubmit={props.formSumbit}
      className="tudu__form d-flex justify-content-between align-items-center"
      action="#"
      id="form"
    >
      <input
      onChange={props.addTodoList}
        className="tudu__input"
        type="text"
        name="text"
        id="tudu__input"
        required
      />
      <button className="tudu__form-btn">Add</button>
    </form>
  );
}

export default Tolist;
