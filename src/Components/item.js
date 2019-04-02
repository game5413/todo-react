import React, { Component } from 'react'

class Item extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.item.map((data, key) => (
            <li
                key={data}
            >
            {data}
            <button onClick={(e) => this.props.onClick(e.target.value)} value={data}>X</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Item
