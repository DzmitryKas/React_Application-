import React from 'react';
import ReactDOM from 'react-dom';
import App from './reducers/App.js';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './reducers/store.js';

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));
registerServiceWorker();