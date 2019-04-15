import React, { Component } from 'react'

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false
    }
  }

  render() {
    return (
      <li
        style={{
          textDecoration: this.props.isCheck ? 'line-through' : ''
        }}
        onDoubleClick={() => {
          if (!this.state.isEdit) {
            this.setState({
              isEdit: !this.state.isEdit
            })
            this.props.update({ value: this.props.keys })
          }
        }}
      >
        {this.state.isEdit ? (
          <input
            type="text"
            key={this.props.keys}
            value={this.props.data}
            onChange={e =>
              // this.props.onUpdates(e.target.value, this.props.keys)
              this.props.update({
                value: this.props.keys,
                text: e.target.value,
                type: 'IS_UPDATE'
              })
            }
            onKeyPress={e => {
              if (e.key === 'Enter') {
                // this.props.onUpdates(e.target.value, this.props.keys, true)
                this.props.update({ type: 'SAVE' })
                this.setState({
                  isEdit: !this.state.isEdit
                })
              }
            }}
            onBlur={() => {
              // this.props.abort(this.props.data, this.props.keys)
              this.props.update({
                value: this.props.keys,
                type: 'IS_ABORT'
              })
              this.setState({
                isEdit: !this.state.isEdit
              })
            }}
            autoFocus={true}
          />
        ) : (
          this.props.data
        )}
        <button
          onClick={e => this.props.onClick({ value: e.target.value })}
          value={this.props.keys}
        >
          X
        </button>
        <input
          type="checkbox"
          onChange={() => this.props.onChange({ value: this.props.keys })}
          checked={this.props.isCheck}
        />
      </li>
    )
  }
}

export default Item
