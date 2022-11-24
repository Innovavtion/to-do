import { React, useState } from "react";

import { ThemeContext, themes } from "./contexts/ThemeContext";
import AddTask from "./components/input/addTask";
import FunctionalLineTasks from "./components/AdditionalFunctional/FunctonLineTasks";
import Tasks from "./components/tasks/tasks";
import Setting from "./components/settings/setting";

function App() {
  const GetTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  localStorage.setItem("tasks", JSON.stringify(GetTasks));

  const [tasks, setTasks] = useState(GetTasks);

  function addTask(text) {
    setTasks([...tasks, { text, status: "uncheck" }]);
    localStorage.setItem(
      "tasks",
      JSON.stringify([...tasks, { text, status: "uncheck" }]),
    );
  }

  function deleteTask(id) {
    setTasks([...tasks.filter((_, i) => i !== id)]);
    localStorage.setItem(
      "tasks",
      JSON.stringify([...tasks.filter((_, i) => i !== id)]),
    );
  }

  function checkTask(id) {
    const newTasks = tasks.map((item, index) => {
      let newitem = item;

      if (index === id && item.status === "uncheck") {
        newitem = { status: "check", text: item.text };
      } else if (index === id && item.status === "check") {
        newitem = { status: "uncheck", text: item.text };
      }

      return newitem;
    });

    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => (
        <div className="centred-content">
          <Setting
            onChange={() => {
              if (theme === themes.light) setTheme(themes.dark);
              if (theme === themes.dark) setTheme(themes.light);
            }}
            value={theme === themes.dark}
            checked
          />
          <AddTask onAddTask={addTask} />
          <FunctionalLineTasks />
          <div className="line" />
          <Tasks
            tasks={tasks}
            setTasks={setTasks}
            deleteTask={deleteTask}
            checkTask={checkTask}
          />
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default App;
