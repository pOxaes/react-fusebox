import React from 'react';
import Articles from '../containers/Articles';
import AddArticle from '../containers/AddArticle';

const App = () => (
    <div>
        <header className='header'>
            <h1>App</h1>
            <AddArticle/>
        </header>
        <Articles/>
    </div>
);

export default App;
