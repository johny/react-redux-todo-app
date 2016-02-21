import React, { Component } from 'react';

import TodoList from './TodoList';
import TodoInput from './TodoInput';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="app-title">TodoApp</h1>
        <div className="app-content">
          <TodoInput />
          <TodoList />
        </div>
        <footer className="app-footer">
          <span>TodoApp with React and Redux.</span>
        </footer>
      </div>
    );
  }
}
