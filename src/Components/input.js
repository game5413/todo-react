import React, { Component } from 'react'
import Item from './item'
import Status from './status'

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            complete: [],
            item: [],
            tempValue: '',
            filter: 'All',
            oldItem: null
        }
        this.completeTodo = this.completeTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.filterTodo = this.filterTodo.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
        this.abortUpdateTodo = this.abortUpdateTodo.bind(this)
        this.onUpdateTodo = this.onUpdateTodo.bind(this)
    }

    addTodo() {
        let temp = this.state.tempValue
        if (!temp) {
            return
        }
        let newItem = this.state.item.slice()
        newItem.push({
            value: temp,
            temp: '',
            isComplete: false
        })
        this.setState({
            oldItem: newItem,
            item: newItem,
            tempValue: ''
        })
    }

    removeTodo(item) {
        const newItem = this.state.item.slice()
        const complete = this.state.complete.slice()
        
        newItem.splice(item, 1)
        let index = complete.indexOf(parseInt(item))
        complete.splice(index, 1)
        this.refs[`item${item}`].checkedItem()

        this.setState({
            oldItem: newItem,
            item: newItem,
            complete: complete
        })
    }

    filterTodo(param) {
        this.setState({
            filter: param
        })
    }

    onUpdateTodo(data, key, save) {
        console.log('asdas')
        const todoItem = this.state.item.slice()
        if (save) {
            todoItem[key].temp = ''
        }
        todoItem[key].value = data
        this.setState({
            item: todoItem
        })
    }

    updateTodo(data, key) {
        const todo = this.state.item.slice()
        todo[key].temp = data
        this.setState({
            item: todo
        })
    }

    abortUpdateTodo(data, key) {
        const todo = this.state.item.slice()
        todo[key].value = todo[key].temp
        todo[key].temp = ''
        this.setState({
            item: todo
        })
    }

    completeTodo(item, key) {
        const array = this.state.complete.slice()
        const todo = this.state.item.slice()
        todo[key].isComplete = !todo[key].isComplete
        console.log(todo)
        const check = array.includes(key)
        this.refs[`item${key}`].checkedItem()
        if (check) {
            array.splice(array.indexOf(key), 1)
            this.setState({
                complete: array,
                item: todo
            })
        }
        else {
            array.push(key)
            this.setState({
                complete: array,
                item: todo
            })
        }
    }

    render() {
        return (
            <div>
                <center>
                <input type="text" key="item" onSubmit={() => this.addTodo()} onChangeCapture={(e) => this.setState({tempValue: e.target.value})} value={this.state.tempValue}></input>
                <button onClick={() => this.addTodo()}>Add</button>
                {/* <button onClick={() => this.setState({item: this.state.oldItem})}>Rollback</button> */}
                <div>
                    <ul>
                        {
                            this.state.item.map((data, key) => {
                                if (this.state.filter == 'Complete') {
                                    if (data.isComplete) {
                                        return (
                                            <Item data={data.value} abort={this.abortUpdateTodo} onUpdates={this.onUpdateTodo} update={this.updateTodo} keys={key} ref={`item${key}`} isCheck={data.isComplete} onChange={(item) => this.completeTodo(item, key)} onClick={this.removeTodo}></Item>
                                        )
                                    }
                                }
                                else if (this.state.filter == 'Active') {
                                    if (!data.isComplete) {
                                        return (
                                            <Item data={data.value} abort={this.abortUpdateTodo} onUpdates={this.onUpdateTodo} update={this.updateTodo} keys={key} ref={`item${key}`} isCheck={data.isComplete} onChange={(item) => this.completeTodo(item, key)} onClick={this.removeTodo}></Item>
                                        )
                                    }
                                }
                                else {
                                    return (
                                        <Item data={data.value} abort={this.abortUpdateTodo} onUpdates={this.onUpdateTodo} update={this.updateTodo} keys={key} ref={`item${key}`} isCheck={data.isComplete} onChange={(item) => this.completeTodo(item, key)} onClick={this.removeTodo}></Item>
                                    )
                                }
                            })
                        }
                    </ul>
                </div>
                <Status total={this.state.item} onClick={this.filterTodo} complete={this.state.complete}></Status>
                </center>
            </div>
        )
    }
}

export default Input
