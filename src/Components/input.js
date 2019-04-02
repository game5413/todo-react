import React, { Component } from 'react'
import Item from './item'

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            complete: [],
            item: [],
            tempValue: '',
            oldItem: null
        }
    }

    addTodo() {
        let temp = this.state.tempValue
        if (!temp) {
            return
        }
        let newItem = this.state.item.slice()
        newItem.push(temp)
        this.setState({
            oldItem: this.state.item,
            item: newItem,
            tempValue: ''
        })
    }

    removeTodo(item) {
        const newItem = this.state.item.slice()
        newItem.map((data, key) => {
            if (data === item) {
                newItem.splice(key, 1)
            }
        })
        this.setState({
            oldItem: this.state.item,
            item: newItem
        })
    }

    render() {
        return (
            <div>
                <input type="text" key="item" onSubmit={() => this.addTodo()} onChangeCapture={(e) => this.setState({tempValue: e.target.value})} value={this.state.tempValue}></input>
                <button onClick={() => this.addTodo()}>Add</button>
                <Item item={this.state.item} onClick={this.removeTodo.bind(this)}></Item>
            </div>
        )
    }
}

export default Input