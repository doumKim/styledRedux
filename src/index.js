import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import reducers from './reducers/';
import App from './App';
import { Provider } from 'react-redux';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(reducers, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
