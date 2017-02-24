import React from 'react';
import { render } from 'react-dom'
import { setStatefulModules } from './hmr';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import App from './components/App.jsx';
import './styles/app.scss';

let store = createStore(reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

setStatefulModules('hmr', 'store/', 'actions/', 'reducers', 'index');
