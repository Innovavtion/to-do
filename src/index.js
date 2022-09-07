import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

root.render(<Clock />);

function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const { numbers } = props;

  const listItems = numbers.map((number, index) => (
    <ListItem key={index} value={number} />
  ));

  return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];

root.render(<NumberList numbers={numbers} />);

class FlaworForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "cocount",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSumbit(event) {
    alert(`Ваш любимый вкус: ${this.state.value}`);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSumbit}>
        <lable>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Грейпфрут</option>
            <option value="lime">Лайм</option>
            <option value="cocount">Кокос</option>
            <option value="mango">Манго</option>
          </select>
        </lable>
        <input type="submit" value="отправить" />
      </form>
    );
  }
}

root.render(<FlaworForm />);
