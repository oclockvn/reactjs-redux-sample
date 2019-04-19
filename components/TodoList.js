import React, { Component } from 'react';
import Todo from './TodoItem';
import './TodoList.css';

class TodoList extends Component {

  state = {
    items: [], // { id:, name: }
    todoName: ''
  }

  addTodo = () => {
    const { 
      items = []
    } = this.state;

    const newTodo = {
      id: items.length + 1,
      name: this.state.todoName
    }

    this.setState({
      items: [...this.state.items, newTodo],
      todoName: ''
    })
  }

  setTodoName = ({ target: { value } }) => {
    this.setState({
      todoName: value
    })
  }

  removeTodo = (id) => {
    console.log(`removing todo ${id}`)
    const {
      items
    } = this.state;

    const newTodos = items.filter(x => x.id !== id);
    this.setState({
      items: newTodos
    })
  }

  render() {

    const {
      items,
      todoName
    } = this.state;

    return (     
      <div>
        <h2>Todo list</h2>
        <div>
          <input placeholder='New todo' className='mr' value={todoName} onChange={this.setTodoName} />
          <button onClick={this.addTodo}>Add todo</button>

          {items.map(({ id, name }) => <Todo key={id} id={id} name={name} remove={this.removeTodo} />)}
        </div>
      </div>
    )
  }
}

export default TodoList;