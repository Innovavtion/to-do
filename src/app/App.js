import { React, useState } from "react";

import { ThemeContext, themes } from "./contexts/ThemeContext";
import AddTask from "./components/input/addTask";
import FunctionalLineTasks from "./components/AdditionalFunctional/FunctionLineTasks";
import Tasks from "./components/tasks/tasks";
import Setting from "./components/settings/setting";

function App() {
  const GetTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  localStorage.setItem("tasks", JSON.stringify(GetTasks));

  // Получение лимита задачек
  const GetTaskLimit = JSON.parse(localStorage.getItem("taskLimit")) || 7;
  localStorage.setItem("taskLimit", JSON.stringify(GetTaskLimit));

  const [tasks, setTasks] = useState(GetTasks);
  // Новые состояния для пагинации
  const [limitTask, setLimitTask] = useState(GetTaskLimit);
  const [totalPaginate, setTotalPaginate] = useState(
    Math.ceil(tasks.length / limitTask),
  );
  const [currentTaskPaginate, setCurrentTaskPaginate] = useState(1);

  const rangeEndTasks = limitTask * currentTaskPaginate;
  const rangeStartTasks = rangeEndTasks - limitTask;

  // Обновление лемита задачек
  function updateLimitTask(value) {
    setLimitTask(value);
    localStorage.setItem("taskLimit", value);
    setTotalPaginate(Math.ceil(tasks.length / value));
    setCurrentTaskPaginate(1);
  }

  function addTask(text, inputMethods) {
    const taskAdd = [{ text, status: "uncheck" }, ...tasks];
    setTasks(taskAdd);
    localStorage.setItem("tasks", JSON.stringify(taskAdd));
    inputMethods("");

    // Изменение state пагинации
    const totalPaginateTasks = Math.ceil((tasks.length + 1) / limitTask);
    setTotalPaginate(totalPaginateTasks);
    setCurrentTaskPaginate(1);
  }

  function deleteTask(id) {
    const taskDelete = [...tasks.filter((_, i) => i !== id)];
    setTasks(taskDelete);
    localStorage.setItem("tasks", JSON.stringify(taskDelete));

    // Изменение state пагинации
    const totalPaginateTasks = Math.ceil((tasks.length - 1) / limitTask);
    setTotalPaginate(totalPaginateTasks);
    if (totalPaginateTasks < currentTaskPaginate)
      setCurrentTaskPaginate(totalPaginateTasks);
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

  function checkRowTask(currentMove) {
    const newTasks = tasks.map((item, index) => {
      let newItem = item;

      if (index < rangeEndTasks && index >= rangeStartTasks) {
        newItem = { status: currentMove, text: item.text };
      }

      return newItem;
    });

    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  }

  function editTask(id, text) {
    const newEditTask = tasks.map((item, index) => {
      const newitem = index === id ? { status: item.status, text } : item;
      return newitem;
    });

    setTasks(newEditTask);
    localStorage.setItem("tasks", JSON.stringify(newEditTask));
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
          <FunctionalLineTasks
            limitTask={limitTask}
            updateLimitTask={updateLimitTask}
            setLimitTask={setLimitTask}
            totalPaginate={totalPaginate}
            currentTaskPaginate={currentTaskPaginate}
            setCurrentTaskPaginate={setCurrentTaskPaginate}
            checkRowTask={checkRowTask}
          />
          <div className="line" />
          <Tasks
            tasks={tasks}
            setTasks={setTasks}
            deleteTask={deleteTask}
            checkTask={checkTask}
            editTask={editTask}
            currentTaskPaginate={currentTaskPaginate}
            rangeStartTasks={rangeStartTasks}
            rangeEndTasks={rangeEndTasks}
          />
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default App;
