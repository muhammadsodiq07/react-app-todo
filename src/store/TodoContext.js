import { createContext, useReducer, useContext, useState } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [name, setname] = useState();

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [...state, { id: Date.now(), name: action.payload.name }];
      default:
        return state;
    }
    return state;
  };

  const handlerSubmit = () => {
    dispatch({ type: "ADD", payload: { name: name } });
  };

  const [todo, dispatch] = useReducer(reducer, []);

  const value = {
    name:name,
    setname:setname,
    todo:todo,
    handlerSubmit
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
