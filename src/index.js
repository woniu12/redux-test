import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './view/index/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/store'

const render = () => ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
render()
store.subscribe(render)