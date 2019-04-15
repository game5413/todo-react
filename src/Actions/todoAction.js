import * as TODO_TYPES from './Types'

export const TODO_ADD = payload => {
  if (payload === {}) {
    payload = Object.assign({}, {type: 'SAVE'})
  }
  else {
    const type = 'type' in payload
    if (!type) {
      Object.assign(payload, { type: 'ON_ADD' })
    }
  }
  return {
    type: TODO_TYPES.TODO_ADD,
    payload
  }
}

export const TODO_REMOVE = payload => {
  return {
    type: TODO_TYPES.TODO_REMOVE,
    payload
  }
}

export const TODO_FILTER = payload => {
  return {
    type: TODO_TYPES.TODO_FILTER,
    payload: payload
  }
}

export const TODO_UPDATE = payload => {
  const type = 'type' in payload
  if (!type) {
    Object.assign(payload, {type: 'ON_EDIT'})
  }
  return {
    type: TODO_TYPES.TODO_UPDATE,
    payload
  }
}

export const TODO_STATUS = payload => {
  return {
    type: TODO_TYPES.TODO_STATUS,
    payload
  }
}

export const TODO_CLEAR = payload => {
  return {
    type: TODO_TYPES.TODO_CLEAR,
    payload
  }
}