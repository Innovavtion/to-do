import { React, useState } from "react";
import Icons from "../icons/index";

function AddTask(props) {
  const [textInput, setTextInput] = useState("");

  function checkAmountText(text) {
    if (text.length <= 50) {
      setTextInput(text);
    }
  }

  return (
    <div className="add-task">
      <div className="add-task-text">Add Task</div>
      <div className="add-task-input-wrapper">
        <input
          className="add-task-input"
          type="text"
          placeholder="max 36 cymbol"
          value={textInput}
          onKeyDown={(e) =>
            e.key === "Enter" && props.onAddTask(textInput, setTextInput)
          }
          onChange={(e) => checkAmountText(e.target.value)}
          maxLength="50"
        />
        <span onClick={() => setTextInput("")}>&times;</span>
      </div>
      <button
        onClick={() => props.onAddTask(textInput, setTextInput)}
        className="icons-btn"
      >
        <Icons name="addTask" color="#000" size="39" className="add_button" />
      </button>
    </div>
  );
}

export default AddTask;
