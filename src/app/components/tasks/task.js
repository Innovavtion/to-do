import { React, useState, useEffect } from "react";
import Icons from "../icons/index";

function Task(props) {
  const [textTask, setTextTask] = useState(props.value);

  // Изменяем state если добавляется новый элемент, так как state не меняется внутри map
  useEffect(() => {
    if (props.value !== textTask && props.dateEditTask.active === false) {
      setTextTask(props.value);
    }
  });

  function inputEditTask() {
    props.setDateEditTask({ id: props.id, active: true });
    props.editTask(props.id, textTask);
  }

  function foldingEditTask() {
    props.setDateEditTask({ id: null, active: false });
    props.editTask(props.id, textTask);
  }

  return (
    <div className="task">
      <button onClick={() => props.checkTask(props.id)} className="icons-btn">
        <Icons name={`task-${props.status}`} size="40" />
      </button>
      {props.dateEditTask.id === props.id &&
      props.dateEditTask.active === true ? (
        <div className="text-and-functional-task">
          <input
            className="input-edit-task"
            value={textTask}
            onKeyDown={(e) => e.key === "Enter" && inputEditTask()}
            onChange={(e) => setTextTask(e.target.value)}
            autoFocus
            onBlur={() => foldingEditTask()}
          />
          <button
            onClick={() => inputEditTask()}
            className="icons-btn confirm-edit"
          >
            <Icons name="task-check-v3" size="35" />
          </button>
        </div>
      ) : (
        <div className="text-and-functional-task">
          <div className={`task-texts ${props.status}`}>{props.value}</div>
          <div className="right-task-functional">
            <button onClick={() => inputEditTask()} className="icons-btn">
              <Icons name="task-edit" size="35" />
            </button>
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
      )}
    </div>
  );
}

export default Task;
