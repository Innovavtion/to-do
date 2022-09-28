import React from "react";
import Task from "./task";

function Tasks(props) {
  return (
    <div className="tasks">
      {props.tasks.map((item, id) => (
        <Task value={item} key={id} />
      ))}
    </div>
  );
}

export default Tasks;
