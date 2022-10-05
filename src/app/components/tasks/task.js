import React from "react";
import Icons from "../icons/index";

function Task(props) {
  return (
    <div className="task">
      <Icons name="task-uncheck" size="40" />
      <div className="task-texts">{props.value}</div>
      <div className="right-task-functional">
        <Icons name="task-edit" size="35" />
        <button
          onClick={() => props.deleteTask(props.id)}
          className="icons-btn"
        >
          <Icons name="task-delete" size="35" />
        </button>
        <Icons
          name="task-drag-indicators"
          size="35"
          className="icon-drag-and-drop"
        />
      </div>
    </div>
  );
}

export default Task;
