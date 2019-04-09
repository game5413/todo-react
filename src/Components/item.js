import React, { Component } from 'react'
// import Input from './input';

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isChecked: this.props.isCheck,
      isEdit: false
    }
    this.checkedItem = this.checkedItem.bind(this)
  }

  checkedItem() {
    this.setState({
      isChecked: !this.props.isCheck
    })
    // (this.state.isChecked) ? 'line-through' : ''
  }
  render() {
    return (
        <li
          style={{
            textDecoration: (this.state.isChecked) ? 'line-through' : ''
          }}
          onDoubleClick={() => {
            if(!this.state.isEdit) {
              this.setState({
                isEdit: !this.state.isEdit
              })
              this.props.update(this.props.data, this.props.keys)
            }
            console.log(this.props)
          }}
        >
        {
          (this.state.isEdit)
          ? <input type="text" key={this.props.keys} value={this.props.data} onChange={(e) => this.props.onUpdates(e.target.value, this.props.keys)} onKeyPress={(e) => {
            if (e.key === 'Enter') {
              this.props.onUpdates(e.target.value, this.props.keys, true)
              this.setState({
                isEdit: !this.state.isEdit
              })
            }
            }}
            onBlur={() => {
              this.props.abort(this.props.data, this.props.keys)
              this.setState({
                isEdit: !this.state.isEdit
              })
            }} autoFocus={true}></input>
          : this.props.data
        }
        <button onClick={(e) => this.props.onClick(e.target.value)} value={this.props.keys}>X</button>
        <input type="checkbox" onChange={() => this.props.onChange(this.props.data)} checked={this.props.isCheck}></input>
      </li>
    )
  }
}

export default Item
