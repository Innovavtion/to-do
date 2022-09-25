import React from "react";
import Icons from "../icons/index";

function AddTask() {
  return (
    <div className="add-task">
      <div className="add-task-text">Add Task</div>
      <div className="add-task-input-wrapper">
        <input
          className="add-task-input"
          type="text"
          placeholder="max 36 cymbol"
        />
        <span className="reset">&times;</span>
      </div>
      <Icons name="addTask" color="#000" size="36" className="add_button" />
    </div>
  );
}

export default AddTask;
