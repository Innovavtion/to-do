import React from "react";

import { ThemeContext, themes } from "./contexts/ThemeContext";
import InputToDo from "./components/input/input";

const App = () => (
  <ThemeContext.Consumer>
    {({ theme, setTheme }) => (
      <InputToDo
        onChange={() => {
          if (theme === themes.light) setTheme(themes.dark);
          if (theme === themes.dark) setTheme(themes.light);
        }}
        value={theme === themes.dark}
      />
    )}
  </ThemeContext.Consumer>
);

export default App;
