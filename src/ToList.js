import React, { useContext } from 'react';
import { ShopContext } from './store/TodoContext';
import "./App.scss";

const ToList = () => {

  const { handlerSubmit, setname, todo, cancelHandler, completeHandler } = useContext(ShopContext);
  console.log(todo);

  return (
    <div className="main-card">
      <form className="form-group d-flex justify-content-between" onSubmit={handlerSubmit}>
        <input 
          className="w-100" 
          type="text" 
          name="to-do-list" id="to-do-list" 
          required 
          onChange={(e) => setname(e.target.value)} 
        />
        <input 
          className="submit-btn" type="submit" 
          id="submitBtn" defaultValue="Add" 
        />
      </form>
      <ol className="ordered-list">
        {todo.map(value => {
          return (
            <li className='ordered-list-item' key={value.id}>
              <button className='item-btn' id="uncompleted" onClick={() => completeHandler(value.id)}>
                {value.name}
              </button>
              <button className='x' onClick={() => cancelHandler(value.id)}>
                <i class='bx bx-x'></i>
              </button>
            </li>
          )
        })}
      </ol>
      <ul className="filter-list m-0 p-0">
        <li className="filter-item">
          <button 
            className="submit-btn" type="button" 
            id="all" 
          >
            All
          </button>
        </li>
        <li className="filter-item">
          <button 
            className="submit-btn" type="button" 
            id="complete"
          >
            Complete
          </button>
        </li>
        <li className="filter-item">
          <button 
            className="submit-btn" type="button" 
            id="incomplete"
          >
            Incomplete
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ToList;
