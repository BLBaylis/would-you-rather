import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import reducers from './reducers';
import middleware from './middleware';
import App from './App';
import './index.css';

const store = createStore((state = {}, action) => ({polls: reducers(state.polls, action)}), middleware)

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
