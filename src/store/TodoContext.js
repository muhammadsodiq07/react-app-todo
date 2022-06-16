import { createContext, useReducer, useState } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [name, setname] = useState();
  const [id, setId] = useState();
  const [active, setActive] = useState();

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, { id: Date.now(), name: action.payload.name, active : false }];
      case "DELETE": {
        state = state.filter(item => {
          return item.id !== id;
        });
      }
      case "COMPLETE": {
        state.forEach(element => {
          if(element.id === action.payload.elId){
            setActive(element.active)
            return  [...state, element.active = !active];
          }
        });
      }
      default:
        return state;
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: { name } });
  };

  const cancelHandler = (elId) => {
    setId(elId)
    dispatch({ type: "DELETE", payload: { id }})
  }

  const completeHandler = (elId) => {
    dispatch({ type: "COMPLETE", payload: { elId : elId }})
  }

  const [todo, dispatch] = useReducer(reducer, []);


  const value = {
    name,
    setname,
    todo,
    handlerSubmit, 
    cancelHandler,
    completeHandler
  };

  console.log(value);

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  )
};
