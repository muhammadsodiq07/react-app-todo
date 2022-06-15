import React, { useContext } from 'react';
import { ShopContext } from './store/TodoContext';

const ToList = () => {

  const { name, handlerSubmit,setname,todo } = useContext(ShopContext);

  return (
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
                {value.name}
              </li>
            </>)
          })}
        </ul>
      </div>
  );
}

export default ToList;
