import { connect } from 'react-redux';
import TodoList from './TodoList';

// map state to props
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
};
const VisibleTodoList = connect(mapStateToProps)(TodoList);

export default VisibleTodoList;
