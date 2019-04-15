import {createStore, combineReducers} from 'redux'
import todoReducers from './Reducers/todoReducers'

// let states = {
//   item: [],
//   value: '',
//   allComplete: false,
//   filter: 'ALL'
// }

const reducer = combineReducers({
  todoReducers
})

function configureStore(initialState = {}) {
    return createStore(reducer, initialState)
}

export default configureStore
