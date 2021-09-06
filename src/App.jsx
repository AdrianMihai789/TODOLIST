import React, { useState } from "react";
import "./App.css";
import AddItems from "./components/add-items/index.jsx";
import ListItems from "./components/list-items";

function App() {
  const initialState = [];

  const [state, setState] = useState(initialState);
  console.log(state);

  function updateList(value) {
    const updatedState = [value, ...state];
    console.log({ updatedState });
    setState(updatedState);
    console.log({ state });
  }

  //on change pe input (event target)
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDoList Application</h1>
      </header>
      <AddItems updateList={(value) => updateList(value)} />

      <ListItems list={state} />
    </div>
  );
}

export default App;
