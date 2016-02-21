import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import todoApp from './reducers/reducers';
import App from './components/App';

let store = createStore(todoApp);

ReactDOM.render(<App />, document.getElementById('root'));
