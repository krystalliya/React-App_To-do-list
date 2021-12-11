import React, { useState } from "react";

function InputArea({ addItem }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleAddItem() {
    addItem(text);
    setText(""); //empty the input after submit the text into the
  }

  return (
    <div className="form">
      <input onChange={handleChange} value={text} type="text" />
      <button onClick={handleAddItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
