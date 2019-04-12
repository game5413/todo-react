import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
// import Input from './Components/input'
import Test from './Components/test'
import { TODO_ADD } from './Actions/todoAction'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      // <Input/>
      <Test redux={this.props}/>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  TODO_ADD: (payload) => dispatch(TODO_ADD(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
