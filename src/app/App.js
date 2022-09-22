import React from "react";

const themes = {
  dark: "dark",
  light: "light",
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { theme: themes.light };
  }

  render() {
    return <button className={this.state.theme}>Theme</button>;
  }
}
