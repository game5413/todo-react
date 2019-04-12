import * as TODO_TYPES from '../Actions/Types'

export default (state, action) => {
  switch (action.type) {
    case TODO_TYPES.TODO_ADD:
      if (action.payload.type === 'ON_ADD') {
        return {
          ...state,
          value: action.payload.value
        }
      }
      let newData = state.item.slice()
      newData.push(action.payload.value)
      return {
        ...state,
        item: newData,
        value: ''
      }
      break
    default:
      return state
      break
  }
}
