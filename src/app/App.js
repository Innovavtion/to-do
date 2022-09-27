import React from "react";

import { ThemeContext } from "./contexts/ThemeContext";
import AddTask from "./components/input/AddTask";
import FunctionalLineTasks from "./components/AdditionalFunctional/FunctonLineTasks";
import Tasks from "./components/tasks/tasks";

const App = () => (
  <ThemeContext.Consumer>
    {() => (
      <div className="centredContent">
        <AddTask />
        <FunctionalLineTasks />
        <div className="line" />
        <Tasks />
      </div>
    )}
  </ThemeContext.Consumer>
);

export default App;
