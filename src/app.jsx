import * as React from 'react';
import { Component } from 'react';
import './styles/app.scss';
import { setStatefulModules } from './hmr.jsx';

class App extends Component {
    render() {
        return (
            <h2>Welcome to React dude!</h2>
        );
    }
}

export default App;

setStatefulModules('hmr', 'store/', 'actions/');
