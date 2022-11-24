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
            status={item.status}
            setTasks={props.setTasks}
            deleteTask={props.deleteTask}
            checkTask={props.checkTask}
          />
        ))}
    </div>
  );
}

export default Tasks;
