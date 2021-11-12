import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './Utils/i18n.js';
import store from './Redux/reduxStore';
import { Provider } from "react-redux";
import { Suspense } from 'react';
import Preloader from './Components/Preloader/Preloader';

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Preloader/>}>
      <App/>
    </Suspense>
  </Provider>, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
