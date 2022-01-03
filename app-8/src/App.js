import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      ninetales: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/ninetales")
      .then((response) => {
        this.setState({
          ninetales: response.data,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Species Name: {this.state.ninetales.name}</h1>
        <h1>Base Experience: {this.state.ninetales.base_experience}</h1>
        <h1>Pokédex Number: {this.state.ninetales.id}</h1>
      </div>
    );
  }
}

export default App;
