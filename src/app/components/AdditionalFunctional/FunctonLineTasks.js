import React from "react";

import Icons from "../icons/index";
import FunctionsPanel from "./FunctionalPanel";

function funtionalLineTask() {
  return (
    <div className="function-line-task">
      <FunctionsPanel className="left-panel">
        <div>Task limit</div>
        <select>
          <option>1</option>
          <option>2</option>
        </select>
      </FunctionsPanel>
      <div className="arrow-centreds">
        <Icons name="arrow-backs" size="52" />
      </div>
      <div className="paginate-number">{`Hello`}</div>
      <div className="arrow-centreds">
        <Icons name="arrow-ios" size="52" />
      </div>
      <FunctionsPanel className="right-panel">
        <Icons name="tasks-check" size="38" />
        <Icons name="tasks-uncheck" size="38" />
      </FunctionsPanel>
    </div>
  );
}

export default funtionalLineTask;
