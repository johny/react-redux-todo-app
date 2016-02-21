import { combineReducers } from 'redux'

import { ADD_TODO } from '../actions/actions.js'

// todos reducer
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          done: false
        }
      ];
    default:
      return state;
  }
}

// combine multile reducers
const todoApp = combineReducers({
  todos
})

export default todoApp;
