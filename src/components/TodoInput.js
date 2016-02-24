import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions.js';

let TodoInput = ({dispatch}) => {

  // key handler for input
  const onKeyUp = (event) => {
    if (event.keyCode === 13) {
      let input = event.target;
      dispatch(addTodo(input.value))
      input.value = '';
    }
  };

  return (
    <div className="todo-input">
      <input type="text"
          className="todo-input__input"
          placeholder="What do you want to do today..."
          onKeyUp={onKeyUp} />
    </div>
  );
};

TodoInput = connect()(TodoInput);

export default TodoInput;
