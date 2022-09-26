import React from "react";

import { ThemeContext } from "./contexts/ThemeContext";
import AddTask from "./components/input/addTask";
import FunctionalLineTasks from "./components/tasks/FunctonLineTasks";

const App = () => (
  <ThemeContext.Consumer>
    {() => (
      <div className="centredContent">
        <AddTask />
        <FunctionalLineTasks />
      </div>
    )}
  </ThemeContext.Consumer>
);

export default App;
