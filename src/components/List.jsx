import React, { useState } from "react";
import InputArea from "./InputArea";
import Item from "./Item";

function List() {
  const [items, setItems] = useState([]);

  function addItem(text) {
    setItems((prevState) => [...prevState, text]);
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <InputArea addItem={addItem} />
      <div>
        <ul>
          {items.map((item, index) => (
            <Item key={index} id={index} item={item} onChecked={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
