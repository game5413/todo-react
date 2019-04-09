import React, { Component } from 'react'

class Status extends Component {
    render() {
        const total = <p>Total Item : {(this.props.total) ? (this.props.complete.length) ? this.props.total.length - this.props.complete.length : this.props.total.length : 0}</p>
        return (
            <div>
                <p>{total}</p>
                <div>
                    <button onClick={() => this.props.onClick('All')}>All</button>
                    <button onClick={() => this.props.onClick('Complete')}>Complete</button>
                    <button onClick={() => this.props.onClick('Active')}>Active</button>
                </div>
            </div>
        )
    }
}

export default Status