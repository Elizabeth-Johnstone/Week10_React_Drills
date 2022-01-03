import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "",
    };
  }

  handleChange(value) {
    this.setState({ message: value });
  }

  render() {
    return (
      <div>
        <input
          onChange={(e) => this.handleChange(e.target.value)}
          type="text"
        ></input>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
