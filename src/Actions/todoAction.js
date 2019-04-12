import * as TODO_TYPES from './Types'

export const TODO_ADD = payload => {
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
    payload: payload || 'ALL'
  }
}

export const TODO_UPDATE = payload => {
  return {
    type: TODO_TYPES.TODO_UPDATE,
    payload
  }
}

export const ON_TODO_UPDATE = payload => {
  if (typeof(payload) !== 'object') {
    return 'not object'
  }
  return {
    type: TODO_TYPES.TODO_UPDATE,
    payload: Object.assign(payload, {"isUpdate": true})
  }
}

export const ABORT_TODO_UPDATE = payload => {
  if (typeof(payload) !== 'object') {
    return 'not object'
  }
  return {
    type: TODO_TYPES.TODO_UPDATE,
    payload: Object.assign(payload, {"isAbort": true})
  }
}