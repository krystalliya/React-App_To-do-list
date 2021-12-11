import React from "react";

function Item({ item, onChecked, id }) {
  return (
    <div
      onClick={() => {
        onChecked(id);
      }}
    >
      <li>{item}</li>
    </div>
  );
}

// function Item(props) {
//   return <li>{props.item}</li>;
// }

export default Item;
