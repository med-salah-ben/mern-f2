import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import './index.css';
import App from './App';
import { store } from './JS/store/store';


ReactDOM.render(
  <BrowserRouter>
 <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
