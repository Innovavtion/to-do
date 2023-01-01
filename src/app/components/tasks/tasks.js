import { React, useState } from "react";
import Task from "./task";

function Tasks(props) {
  const [dateEditTask, setDateEditTask] = useState({
    id: null,
    active: false,
  });

  return (
    <div className="tasks">
      {props.tasks !== null &&
        props.tasks.map((item, id) => {
          if (props.rangeStartTasks <= id && props.rangeEndTasks > id) {
            return (
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
                setDateEditTask={setDateEditTask}
              />
            );
          }
          return <div key={id} />;
        })}
    </div>
  );
}

export default Tasks;
