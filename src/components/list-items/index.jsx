import React from "react";
import EditItems from "../edit-items";

function ListItems(props) {
  console.log(` ********** ${props.list}`);
  if (!props.list) return null;
  return (
    <ul className="list-Items">
      {props.list.map((item, index) => {
        const className = item.marked ? "item-text--marked" : "item-text";
        return (
          <li key={item.id}>
            <div
              className={className}
              onDoubleClick={() => props.checkList(item.id)}
            >
              {item.value}
            </div>
            <EditItems removeItem={() => props.removeItem(item.id)} />
          </li>
        );
      })}
    </ul>
  );
}

export default ListItems;
