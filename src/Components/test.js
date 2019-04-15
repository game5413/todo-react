import React, { Component } from 'react'

export default class Test extends Component {
  render() {
      console.log(this.props.redux)
    return (
      <div>
        <center>
          <p>Test Redux on ToDoApp</p>
          <span>
            this is props:
            {JSON.stringify(this.props.redux)}
          </span>
          <input type="text" onChange={e => this.props.redux.TODO_ADD({value: e.target.value})} onKeyPress={e => (e.key === 'Enter') ? this.props.redux.TODO_ADD({value: e.target.value, type: 'SAVE'}) : null} value={this.props.redux.todoReducers.value} />
        </center>
      </div>
    )
  }
}
