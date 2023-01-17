import { React, useState } from "react";

import Icons from "../icons/index";

function Setting({ value, onChange }) {
  const [settingVisible, setSettingVisible] = useState(false);

  return (
    <div className="setting">
      <button
        className="icons-btn"
        onClick={() => setSettingVisible(!settingVisible)}
      >
        <Icons name="setting" size="40" className={settingVisible} />
      </button>
      <input
        type="checkbox"
        className={`toggle-button ${settingVisible}`}
        onChange={onChange}
        checked={value}
      />
    </div>
  );
}

export default Setting;
