import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore ,combineReducers} from 'redux';
import {Provider} from 'react-redux'
import CounterReducer from './store/reducers/counter'
import ResultReducer from './store/reducers/result'

const rootReducer = combineReducers({
  ctr: CounterReducer,
  res : ResultReducer
})

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
  <Provider store = {store}>
  <App />
  
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

