import React, { useState } from 'react'
import "./App.scss";
import Buttons from "./components/Buttons/Buttons";
import Tolist from "./components/ToList/Tolist";
import Ullist from "./components/Ullist/Ullist";


function App() {

  const [listObj, setlistObj] = useState({
    name: undefined,
  });
  const [listArr, setlistArr] = useState([
    {
      id:1,
      name: "Do homework",
    },
    {
      id:2,
      name: "Read book",
    },
  ]);


 const removeID = (id) => {
    setlistArr([...listArr.filter(item => item.id !== id)])
 }

  const addTodoList = (e) => {
     let obj = {
       name: e.target.value
     }
     setlistObj({...listObj, ...obj})
   }  

  const formSumbit = (e) => {
    e.preventDefault();
    e.target.reset();
    setlistArr([...listArr, listObj])
  }

  return (
    <section className="section tudu">
      <div className="tudu__list-box">
        <Tolist formSumbit={formSumbit}
        addTodoList={addTodoList}
        />
        {listArr.map((el, i) => (
         <Ullist 
         key={i} name={el.name}
         removed={removeID}
         /> 
        ))}

        <Buttons/>
      </div>
    </section>
  );
}

export default App;
