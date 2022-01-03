import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      animals: ["cats", "dogs", "birds", "chickens"]
    }

  }

  render() {
    let animalsToShow = this.state.animals.map((element) => {
      return <h2>{element}</h2>
    })
    return(
      <div>{animalsToShow}</div>
    )
  }

}

export default App;
