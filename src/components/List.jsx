import React, { useState } from "react";
import Form from "./Form";
import Item from "./Item";

function List() {
    const [items, setItems] = useState([]);
  return (
    <div>
      <Form setItems={setItems} />
      <div>
        <ul>
          {items.map((item, index) => (
            <Item key={index} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
