import React from "react";
import EditItems from "../edit-items";

function ListItems(props) {
  console.log(` ********** ${props.list}`);
  if (!props.list) return null;
  return (
    <ul className="list-Items">
      {props.list.map((item) => {
        return (
          <li key={item}>
            <div className="item-text">{item}</div>
            <EditItems />
          </li>
        );
      })}
    </ul>
  );
}

export default ListItems;
