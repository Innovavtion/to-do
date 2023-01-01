import React from "react";

import Icons from "../icons/index";
import FunctionsPanel from "./FunctionalPanel";

function funtionalLineTask(props) {
  // Отображение чисел пагинации
  function viewPaginate(objPaginate) {
    return objPaginate === 0 ? 1 : objPaginate;
  }

  // Перелестнуть на другие задачки
  function switchCurrentPaginate(value) {
    if (value > 0 && value <= props.totalPaginate)
      props.setCurrentTaskPaginate(value);
  }

  return (
    <div className="function-line-task">
      <FunctionsPanel className="left-panel">
        <div>Task limit</div>
        <select
          value={props.limitTask}
          onChange={(event) => props.updateLimitTask(event.target.value)}
        >
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
      </FunctionsPanel>
      <div
        className="arrow-centreds"
        onClick={() => switchCurrentPaginate(props.currentTaskPaginate - 1)}
      >
        <Icons name="arrow-backs" size="52" />
      </div>
      <div className="paginate-number">
        {`${viewPaginate(props.currentTaskPaginate)} / ${viewPaginate(
          props.totalPaginate,
        )}`}
      </div>
      <div
        className="arrow-centreds"
        onClick={() => switchCurrentPaginate(props.currentTaskPaginate + 1)}
      >
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
