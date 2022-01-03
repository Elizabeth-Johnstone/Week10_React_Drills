import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      filterString: "",
      animals: ['fish', 'cats', 'dogs', 'birds', 'horses', 'caterpillars']
    }
  }

  handleChange(filter){
    this.setState({ filterString: filter })
  }

  render() {
    let animalsToShow = this.state.animals.filter((element) => {
      return element.includes(this.state.filterString)
    })
    .map((element) => {
      return <h2>{element}</h2>
    })

    return(
      <div>
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        <div>{animalsToShow}</div>
      </div>
    )
  }
}

export default App;
