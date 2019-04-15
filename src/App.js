import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import Input from './Components/input'
import Test from './Components/test'
import {
  TODO_ADD,
  TODO_REMOVE,
  TODO_STATUS,
  TODO_UPDATE,
  TODO_FILTER,
  TODO_CLEAR,
} from './Actions/todoAction'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      // <Input/>
      <Input redux={this.props}/>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  TODO_ADD: payload => dispatch(TODO_ADD(payload)),
  TODO_REMOVE: payload => dispatch(TODO_REMOVE(payload)),
  TODO_STATUS: (payload = {}) => dispatch(TODO_STATUS(payload)),
  TODO_UPDATE: (payload = {}) => dispatch(TODO_UPDATE(payload)),
  TODO_FILTER: (payload = {}) => dispatch(TODO_FILTER(payload)),
  TODO_CLEAR: (payload = {}) => dispatch(TODO_CLEAR(payload))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
