import React, { useState } from "react";
import "./App.css";
import AddItems from "./components/add-items/index.jsx";
import ListItems from "./components/list-items";

function App() {
  const initialState = [];

  const [state, setState] = useState(initialState);
  console.log(state);

  function updateList(value) {
    const item = {
      id: state.length,
      value,
      marked: false,
    };
    const updatedState = [item, ...state];
    console.log({ updatedState });
    setState(updatedState);
    console.log({ state });
  }

  function removeItem(id) {
    console.log("delete item");
    const newList = state.filter((value) => {
      return value.id !== id;
    });
    setState(newList);
  }

  function checkList(id) {
    const updatedState = state.map((el) => {
      if (el.id === id) {
        if (!el.marked) {
          return {
            ...el,
            marked: true,
          };
        } else {
          return {
            ...el,
            marked: false,
          };
        }
      }
    });

    setState(updatedState);
  }
}

function editList(id) {
  const editedList = [...state].map((value) => {});
}

//on change pe input (event target)
return (
  <div className="App">
    <header className="App-header">
      <h1>ToDoList Application</h1>
    </header>
    <AddItems updateList={(value) => updateList(value)} />

    <ListItems removeItem={removeItem} list={state} />
  </div>
);

export default App;
