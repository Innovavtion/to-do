import { React, useState } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import Task from "./task";

function Tasks(props) {
  const [dateEditTask, setDateEditTask] = useState({
    id: null,
    active: false,
  });

  function editPosition(e) {
    const { removedIndex, addedIndex } = e;
    const newTasks = [...props.tasks];

    newTasks.splice(addedIndex, 0, newTasks.splice(removedIndex, 1)[0]);

    props.setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  return (
    <div className="tasks">
      <Container
        lockAxis="y"
        onDrop={(e) => editPosition(e)}
        dragHandleSelector=".drag-handle"
      >
        {props.tasks.map((item, id) => {
          if (props.rangeStartTasks <= id && props.rangeEndTasks > id) {
            return (
              <Draggable key={id}>
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
              </Draggable>
            );
          }
          return <div key={id} />;
        })}
      </Container>
    </div>
  );
}

export default Tasks;
