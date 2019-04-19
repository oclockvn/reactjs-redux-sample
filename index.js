import React, { Component } from 'react';
import { render } from 'react-dom';
import TodoListComponent from './components/TodoList';

class App extends Component {
  render() {
    return ( // jsx
      <div>
        My App

        {/* <Header /> */}

        <TodoListComponent />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));