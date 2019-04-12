import {createStore} from 'redux'
import todoReducers from './Reducers/todoReducers'

let states = {
  item: [],
  value: null,
  allComplete: false,
  filter: 'ALL'
}

function configureStore(initialState = states) {
    return createStore(todoReducers, initialState)
}

export default configureStore
