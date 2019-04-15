import React, { Component } from 'react'
import Item from './item'
import Status from './status'

class Input extends Component {
  render() {
    let totalComplete = 0
    this.props.redux.todoReducers.item.map((data, key) =>
      data.isComplete ? ++totalComplete : null
    )
    return (
      <div>
        <center>
          <input
            type="checkbox"
            onChange={() => this.props.redux.TODO_CLEAR({ type: 'ALL' })}
            checked={this.props.redux.todoReducers.allComplete}
          />
          {/* <p>{JSON.stringify(this.props.redux)}</p> */}
          <input
            type="text"
            onChange={e =>
              this.props.redux.TODO_ADD({ value: e.target.value })
            }
            onKeyPress={e =>
              e.key === 'Enter'
                ? this.props.redux.TODO_ADD({
                    type: 'SAVE'
                  })
                : null
            }
            value={this.props.redux.todoReducers.value}
          />
          <div>
            <ul>
              {this.props.redux.todoReducers.item.map((data, key) => {
                if (this.props.redux.todoReducers.filter === 'COMPLETE') {
                  if (data.isComplete) {
                    return (
                      <Item
                        key={data.id}
                        data={data.value}
                        update={this.props.redux.TODO_UPDATE}
                        keys={key}
                        ref={`item${key}`}
                        isCheck={data.isComplete}
                        onChange={this.props.redux.TODO_STATUS}
                        onClick={this.props.redux.TODO_REMOVE}
                      />
                    )
                  }
                } else if (
                  this.props.redux.todoReducers.filter === 'ACTIVE'
                ) {
                  if (!data.isComplete) {
                    return (
                      <Item
                        key={data.id}
                        data={data.value}
                        update={this.props.redux.TODO_UPDATE}
                        keys={key}
                        ref={`item${key}`}
                        isCheck={data.isComplete}
                        onChange={this.props.redux.TODO_STATUS}
                        onClick={this.props.redux.TODO_REMOVE}
                      />
                    )
                  }
                } else {
                  return (
                    <Item
                      key={data.id}
                      data={data.value}
                      update={this.props.redux.TODO_UPDATE}
                      keys={key}
                      ref={`item${key}`}
                      isCheck={data.isComplete}
                      onChange={this.props.redux.TODO_STATUS}
                      onClick={this.props.redux.TODO_REMOVE}
                    />
                  )
                }
              })}
            </ul>
          </div>
          <Status
            total={this.props.redux.todoReducers.item.length}
            onClick={this.props.redux.TODO_FILTER}
            complete={totalComplete}
            clear={this.props.redux.TODO_CLEAR}
          />
        </center>
      </div>
    )
  }
}

export default Input
