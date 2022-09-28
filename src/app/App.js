import { React, useState } from "react";

import { ThemeContext, themes } from "./contexts/ThemeContext";
import AddTask from "./components/input/AddTask";
import FunctionalLineTasks from "./components/AdditionalFunctional/FunctonLineTasks";
import Tasks from "./components/tasks/tasks";
import Setting from "./components/settings/setting";

function App() {
  const [tasks, setTasks] = useState(["Привет", "fghfgh"]);

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
          <AddTask />
          <FunctionalLineTasks />
          <div className="line" />
          <Tasks tasks={tasks} setTasks={setTasks} />
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

export default App;
