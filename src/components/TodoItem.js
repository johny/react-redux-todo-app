import React, { PropTypes } from 'react';

const TodoItem = ({text}) => (
  <li className="todo-list__item">
    <span>{text}</span>
  </li>
);

TodoItem.propTypes = {
  text: PropTypes.string.isRequired
}

export default TodoItem;
