import * as TODO_TYPES from '../Actions/Types'

let states = {
  item: [],
  value: '',
  tempItemText: '',
  allComplete: false,
  filter: 'ALL'
}

function checkComplete(param, state) {
  let length = 0
  param.map((data, key) => {
    if (data.isComplete) {
      ++length
    }
  })
  // todo.map((data, key) => {
  //   if (data.isComplete) {
  //     ++length
  //   }
  // })
  if (length !== state.length) {
    return false
  } else {
    return true
  }
}

export default (state = states, action) => {
  switch (action.type) {
    case TODO_TYPES.TODO_ADD:
      if (action.payload.type === 'ON_ADD') {
        return {
          ...state,
          value: action.payload.value
        }
      } else if (action.payload.type === 'SAVE') {
        let newData = state.item.slice()
        if (state.value === '') {
          return state
        }
        newData.push({
          id: Math.random()
            .toString(36)
            .replace('0.', ''),
          value: state.value,
          isComplete: false
        })
        let status = checkComplete(newData, newData)
        return {
          ...state,
          item: newData,
          value: '',
          allComplete: status
        }
      }
      break
    case TODO_TYPES.TODO_REMOVE:
      let newData = state.item.slice()
      let index = parseInt(action.payload.value)
      if (!newData[index]) {
        return state
      }
      newData.splice(index, 1)
      return {
        ...state,
        item: newData
      }
      break
    case TODO_TYPES.TODO_STATUS:
      if (action.payload === {}) {
        return state
      }
      let newTODO = state.item.slice()
      let ind = parseInt(action.payload.value)
      if (!newTODO[ind]) {
        return state
      }
      newTODO[ind].isComplete = !newTODO[ind].isComplete
      let status = checkComplete(newTODO, newTODO)
      return {
        ...state,
        item: newTODO,
        allComplete: status
      }
      break
    case TODO_TYPES.TODO_UPDATE:
      if (action.payload === {}) {
        return state
      }
      if (action.payload.type === 'ON_EDIT') {
        newTODO = state.item.slice()
        ind = parseInt(action.payload.value)
        if (!newTODO[ind]) {
          return state
        }
        return {
          ...state,
          tempItemText: newTODO[ind].value
        }
      }
      else if (action.payload.type === 'IS_UPDATE') {
        newTODO = state.item.slice()
        ind = parseInt(action.payload.value)
        if (!newTODO[ind]) {
          return state
        }
        newTODO[ind].value = action.payload.text
        return {
          ...state,
          item: newTODO
        }
      }
      else if (action.payload.type === 'IS_ABORT') {
        newTODO = state.item.slice()
        ind = parseInt(action.payload.value)
        if (!newTODO[ind]) {
          return state
        }
        newTODO[ind].value = state.tempItemText
        return {
          ...state,
          tempItemText: '',
          item: newTODO
        }
      }
      else if (action.payload.type === 'SAVE') {
        return {
          ...state,
          tempItemText: ''
        }
      }
      break
    case TODO_TYPES.TODO_FILTER:
      if (action.payload === {}) {
        return state
      }
      return {
        ...state,
        filter: action.payload.filter
      }
      break
    case TODO_TYPES.TODO_CLEAR:
      if (action.payload === {}) {
        return state
      }
      newTODO = state.item.slice()
      if (action.payload.type === 'ALL') {
        let length = 0
        newTODO.map((data, key) => {
          if (!data.isComplete) {
            ++length
          }
        })
        newTODO.map((data, key) => {
          data.isComplete = length > 0 ? true : !data.isComplete
        })
        return {
          ...state,
          item: newTODO,
          allComplete: !state.allComplete
        }
      }
      else if (action.payload.type === 'CLEAR') {
        newTODO = state.item.slice()
        let newData = []
        newTODO.forEach(element => {
          if (!element.isComplete) {
            const index = newTODO.indexOf(element)
            newData.push(newTODO[index])
          }
        })
        return {
          ...state,
          item: newData,
          allComplete: false
        }
      }
      break
    default:
      return state
      break
  }
}
