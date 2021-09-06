import { func } from "prop-types";
import React from "react";

function EditItems() {
  return (
    <div className="edit-items">
      <button className="edit-items__edit">Edit</button>
      <button className="edit-items__remove">X</button>
    </div>
  );
}

export default EditItems;
