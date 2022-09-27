import React from "react";

import { ThemeContext, themes } from "./contexts/ThemeContext";
import AddTask from "./components/input/AddTask";
import FunctionalLineTasks from "./components/AdditionalFunctional/FunctonLineTasks";
import Tasks from "./components/tasks/tasks";
import Setting from "./components/settings/setting";

const App = () => (
  <ThemeContext.Consumer>
    {({ theme, setTheme }) => (
      <div className="centredContent">
        <Setting
          onChange={() => {
            if (theme === themes.light) setTheme(themes.dark);
            if (theme === themes.dark) setTheme(themes.light);
          }}
          value={theme === themes.dark}
        />
        <AddTask />
        <FunctionalLineTasks />
        <div className="line" />
        <Tasks />
      </div>
    )}
  </ThemeContext.Consumer>
);

export default App;
