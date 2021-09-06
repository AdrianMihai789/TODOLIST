import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function AddItems(props) {
  const initialValue = "";
  const [value, setValue] = useState(initialValue);

  //function handleReset(inp) {
  //   let reseted = document.querySelectorAll("input");
  //  this.inp.value = "";
  //}

  //const resetInput = () => {
  //  setValue("");
  // };

  console.log({ value });
  return (
    <div className="add-items">
      <input
        value={value}
        type="text"
        className="add-items__input"
        onChange={(event) => setValue(event.target.value)}
      />

      <button
        className="add-items__button"
        onClick={() => {
          props.updateList(value);

          setValue("");
          console.log("--------");
        }}
      >
        Add
      </button>
    </div>
  );
}
export default AddItems;
