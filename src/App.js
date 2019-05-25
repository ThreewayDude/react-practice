import React, { Component } from 'react';
import './App.css';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';

class App extends Component {
    state = {
        todos: []
    };
    
    // Toggle complete
    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        }) });
    };

    // Delete Todo
    deleteTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter((todo) => todo.id !== id)] });
    };

    // Add Todo
    addTodo = (title) => {
        const newTodo = {
            id: this.state.todos.length + 1,
            title: title,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo] });
    };

    render() {
        return (
            <div className="App">
                <div className="container">
                    <Header />
                    <Todos todos={this.state.todos}
                      markComplete={this.markComplete}
                      deleteTodo={this.deleteTodo}/>
                    <AddTodo addTodo={this.addTodo} />
                </div>
            </div>
            );
    }
}

export default App;
