import React from 'react';
import Filters from './Filters';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

const App = () => (
  <div>
    <header>
        <AddTodo />
        <Filters />
    </header>
    <VisibleTodoList />
  </div>
);

export default App;
