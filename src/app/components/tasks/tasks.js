import { React, useState } from "react";
import Task from "./task";

function Tasks(props) {
  const [dateEditTask, setDateEditTask] = useState({
    id: null,
    active: false,
  });

  function editStateTask(id, active) {
    if (id === dateEditTask.id && active === !dateEditTask.active) {
      setDateEditTask({ id, active: false });
    } else {
      setDateEditTask({ id, active: true });
    }
  }

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
            editTask={props.editTask}
            dateEditTask={dateEditTask}
            editStateTask={editStateTask}
          />
        ))}
    </div>
  );
}

export default Tasks;
