import React, { useState } from "react";

function Item({ item }) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: isDone ? "line-through" : "none" }}
    >
      {item}
    </li>
  );
}

// function Item(props) {
//   return <li>{props.item}</li>;
// }

export default Item;
