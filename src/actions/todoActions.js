import * as actionTypes from '../constants/todoConstant'

export function addTodo (item) {
  return {
    type: actionTypes.ADD_TODO,
    payload: item
  }
}

export function editTodo (item, index) {
  return {
    type: actionTypes.EDIT_TODO,
    payload: {
      item,
      index
    }
  }
}

export function removeTodo (index) {
  return {
    type: actionTypes.REMOVE_TODO,
    payload: index
  }
}

export function toggleTodo (done, index) {
  console.log(done, index)
  return {
    type: actionTypes.TOGGLE_TODO,
    payload: {
      done,
      index
    }
  }
}