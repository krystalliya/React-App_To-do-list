import React, { useState } from "react";

function Form({ setItems }) {
  const [text, setText] = useState("");
  //   const [items, setItems] = useState([]);

  function handleChange(e) {
    setText(e.target.value);
  }

  function addItem() {
    setItems((prevState) => [...prevState, text]);
    setText(""); //empty the input after submit the text into the <li>
  }

  return (
    <div className="form">
      <input onChange={handleChange} value={text} type="text" />
      <button onClick={addItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default Form;
