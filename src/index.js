import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import reducers from './reducers';
import middleware from './middleware';
import App from './App';
import './index.css';

const store = createStore(reducers, middleware);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
