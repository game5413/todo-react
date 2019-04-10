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
        <div className="status-text">
          {total}
        </div>
        <div className="action-btn">
          <button onClick={() => this.props.onClick('All')}>All</button>
          <button onClick={() => this.props.onClick('Complete')}>
            Complete
          </button>
          <button onClick={() => this.props.onClick('Active')}>Active</button>
        </div>
      </div>
    )
  }
}

export default Status
