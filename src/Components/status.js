import React, { Component } from 'react'

class Status extends Component {
  render() {
    const total = (
      <p>
        Total Item :{' '}
        {this.props.total
          ? this.props.complete
            ? this.props.total - this.props.complete
            : this.props.total
          : 0}
      </p>
    )
    return (
      <div className="status">
        <div className="status-text">{total}</div>
        <div className="action-btn">
          <button onClick={() => this.props.onClick({filter: 'ALL'})}>All</button>
          <button
            onClick={() => this.props.onClick({ filter: 'COMPLETE' })}
          >
            Complete
          </button>
          <button
            onClick={() => this.props.onClick({ filter: 'ACTIVE' })}
          >
            Active
          </button>
          {this.props.complete ? (
            <button onClick={() => this.props.clear({type: 'CLEAR'})}>
              Clear Complete
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
    )
  }
}

export default Status
