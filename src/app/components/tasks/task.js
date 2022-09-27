import React from "react";
import Icons from "../icons/index";

function Task() {
  return (
    <div className="task">
      <Icons name="task-uncheck" size="40" />
      <div className="task-texts">Какой то текст</div>
      <div className="right-task-functional">
        <Icons name="task-edit" size="35" />
        <Icons name="task-delete" size="35" />
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
