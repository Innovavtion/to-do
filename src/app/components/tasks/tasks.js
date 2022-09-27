import React from "react";
import Task from "./task";

function Tasks() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="tasks">
      {items.map((item, id) => (
        <Task value={item} key={id} />
      ))}
    </div>
  );
}

export default Tasks;
