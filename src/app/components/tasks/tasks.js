import React from "react";
import Task from "./task";

function Tasks(props) {
  return (
    <div className="tasks">
      {props.tasks !== null &&
        props.tasks.map((item, id) => (
          <Task
            value={item.text}
            key={id}
            id={id}
            setTasks={props.setTasks}
            deleteTask={props.deleteTask}
          />
        ))}
    </div>
  );
}

export default Tasks;
