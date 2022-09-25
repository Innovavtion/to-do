import React from "react";

import { ThemeContext } from "./contexts/ThemeContext";
import AddTask from "./components/input/addTask";

const App = () => (
  <ThemeContext.Consumer>{() => <AddTask />}</ThemeContext.Consumer>
);

export default App;
