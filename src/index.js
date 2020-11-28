import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// Styles
import './styles/styles.scss';

// Components con rutas
import { AppRouter } from './routers/AppRouter';

import { Provider } from 'react-redux';

import { store } from './store/store';

ReactDOM.render(
  
  <Provider store={store}>

    <AppRouter />

  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
