import React, { Component } from 'react'
import Item from './ItemList'
import Status from './FooterActions'
import withStyles from "react-jss"

const styles = theme => ({
  layout: {},
  inputWrapper: {
    display: "inline-flex",
    width: "100%",
    height: "inherit",
    justifyContent: "center"
  },
  checkBox: {
    display: "none"
  },
  checkBoxWrapper: {
    border: "1px solid black",
    height: theme.PxToRem(20),
    width: theme.PxToRem(20),
    marginRight: theme.PxToRem(10),
    padding: theme.PxToRem(5)
  },
  checkBoxValue: {
    width: "100%",
    height: "100%",
  }
})

let TodoId = 0

const InputComponent = ({styles}) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        id="checkbox-all"
        className={styles.checkBox}
        type="checkbox"
      />
      <label htmlFor="checkbox-all" className={styles.checkBoxWrapper}>
        <div
          className={styles.checkBoxValue}
        />
      </label>
      <input
        type="text"
      />
    </div>
  )
}

React.memo(InputComponent)

class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {
      complete: [],
      item: [],
      tempValue: '',
      allComplete: false,
      filter: 'All'
    }
    this.completeTodo = this.completeTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.filterTodo = this.filterTodo.bind(this)
    this.updateTodo = this.updateTodo.bind(this)
    this.abortUpdateTodo = this.abortUpdateTodo.bind(this)
    this.onUpdateTodo = this.onUpdateTodo.bind(this)
    this.completeAll = this.completeAll.bind(this)
    this.clearComplete = this.clearComplete.bind(this)
  }

  addTodo() {
    let temp = this.state.tempValue
    if (!temp) {
      return
    }
    let newItem = this.state.item.slice()
    newItem.push({
      id: ++TodoId,
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
    const check = array.includes(parseInt(key))
    if (check) {
      array.splice(array.indexOf(parseInt(key)), 1)
      this.setState({
        complete: array,
        item: todo
      })
    } else {
      array.push(key)
      this.setState({
        complete: array,
        item: todo
      })
    }
    let length = 0
    todo.map((data, key) => {
      if (data.isComplete) {
        ++length
      }
    })
    if (length !== this.state.item.length) {
      this.setState({ allComplete: false })
    } else {
      this.setState({ allComplete: true })
    }
  }

  clearComplete() {
    const { item } = this.state
    const data = item.slice()
    let newData = []
    data.forEach(element => {
      if (!element.isComplete) {
        const index = data.indexOf(element)
        newData.push(data[index])
      }
    })
    this.setState({
      item: newData,
      allComplete: false
    })
  }

  completeAll(data = '') {
    const { item } = this.state
    if (!data) {
      data = item
    }
    const newItem = data.slice()
    let length = 0
    newItem.map((data, key) => {
      if (!data.isComplete) {
        ++length
      }
    })
    newItem.map((data, key) => {
      data.isComplete = (length > 0) ? true : !data.isComplete
    })
    this.setState({
      item: newItem,
      allComplete: !this.state.allComplete
    })
  }

  componentDidMount()
  {
    console.log(this)
  }

  render() {
    const { item } = this.state
    const { classes } = this.props
    let totalComplete = 0
    const count = item.map((data, index) => data.isComplete && ++totalComplete)
    return (
      <div className={classes.layout}>
        <InputComponent styles={classes}/>
        <center>
          <input
            type="checkbox"
            onChange={() => this.completeAll()}
            checked={this.state.allComplete}
          />
          <input
            type="text"
            key="item"
            onSubmit={() => this.addTodo()}
            onChange={e => this.setState({ tempValue: e.target.value })}
            value={this.state.tempValue}
          />
          <button onClick={() => this.addTodo()}>Add</button>
          <div>
            <ul>
              {this.state.item.map((data, key) => {
                if (this.state.filter === 'Complete') {
                  if (data.isComplete) {
                    return (
                      <Item
                        key={data.id}
                        data={data.value}
                        abort={this.abortUpdateTodo}
                        onUpdates={this.onUpdateTodo}
                        update={this.updateTodo}
                        keys={key}
                        ref={`item${key}`}
                        isCheck={data.isComplete}
                        onChange={item =>
                          this.completeTodo(item, key)
                        }
                        onClick={this.removeTodo}
                      />
                    )
                  }
                } else if (this.state.filter === 'Active') {
                  if (!data.isComplete) {
                    return (
                      <Item
                        key={data.id}
                        data={data.value}
                        abort={this.abortUpdateTodo}
                        onUpdates={this.onUpdateTodo}
                        update={this.updateTodo}
                        keys={key}
                        ref={`item${key}`}
                        isCheck={data.isComplete}
                        onChange={item =>
                          this.completeTodo(item, key)
                        }
                        onClick={this.removeTodo}
                      />
                    )
                  }
                } else {
                  return (
                    <Item
                      key={data.id}
                      data={data.value}
                      abort={this.abortUpdateTodo}
                      onUpdates={this.onUpdateTodo}
                      update={this.updateTodo}
                      keys={key}
                      ref={`item${key}`}
                      isCheck={data.isComplete}
                      onChange={item => this.completeTodo(item, key)}
                      onClick={this.removeTodo}
                    />
                  )
                }
              })}
            </ul>
          </div>
          <Status
            total={this.state.item.length}
            onClick={this.filterTodo}
            complete={totalComplete}
            clear={this.clearComplete}
          />
        </center>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Input)
