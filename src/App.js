import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Input from './Components/input'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: null
    }
  }

  render() {
    return (
      <Input/>
    )
  }
}

export default App;
