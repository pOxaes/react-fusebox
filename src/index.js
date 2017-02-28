import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers/articles';
import App from './components/App';
import {setStatefulModules} from './hmr';
import './styles/app.scss';

const container = document.getElementById('root');

let store = createStore(reducers);

const renderApp = (appStore) => {
    render(
        <Provider store={appStore}>
            <App />
        </Provider>,
        container
    );
};

setStatefulModules(renderApp, store, 'hmr', 'actions/', 'reducers/');

renderApp(store);
