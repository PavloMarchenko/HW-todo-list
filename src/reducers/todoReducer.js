import * as actionTypes from '../constants/todoConstant'

const initialState = {
  list: [
    {
      text: 'skfdvjdkfv',
      done: true
    },
    {
      text: 'ewq',
      done: false
    }
  ]
}


function todoReducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case actionTypes.REMOVE_TODO:
      const listCopyRemove = [...state.list]
      listCopyRemove.splice(action.payload, 1)
      return {
        ...state,
        list: listCopyRemove
      };
    case actionTypes.TOGGLE_TODO:
      const listCopy = [...state.list]
      listCopy.splice(action.payload.index, 1, {
        ...state.list[action.payload.index],
        done: action.payload.done,
      })

      return {
        ...state,
        list: listCopy
      };
    case actionTypes.EDIT_TODO:
      const listCopyEdit = [...state.list]
      listCopyEdit.splice(action.payload.index, 1, action.payload.item)
      return {
        ...state,
        list: listCopyEdit,
      };
    default:
      return state;
  }
}

export default todoReducer