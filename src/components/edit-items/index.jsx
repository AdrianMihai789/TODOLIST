import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./index.css";
function EditItems(props) {
  return (
    <div className="edit-items">
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={props.editList}
        classes={{ root: "edit-items__button" }}
      >
        Edit
      </Button>

      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={props.removeItem}
        classes={{ root: "edit-items__remove" }}
      >
        Remove
      </Button>
    </div>
  );
}

export default EditItems;
//     <button className="edit-items__edit">Edit</button>
//<button className="edit-items__remove">X</button>
