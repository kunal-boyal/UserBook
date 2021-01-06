import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'

import App from './App';
import reducer from './store/reducer'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

axios.defaults.baseURL = "https://intense-tundra-27099.herokuapp.com";

ReactDOM.render(app,document.getElementById('root'));


