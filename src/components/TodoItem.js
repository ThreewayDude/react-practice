import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: (this.props.todo.completed) ? 'line-through' : 'none',
            backgroundColor: '#fffffb',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
        };
    }

    render() {
        const { id, title, completed } = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" defaultChecked={completed} onChange={this.props.markComplete.bind(this, id)} />{' '}
                    {title}
                    <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        );
    }
}

// PropTypes
TodoItem.propType = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    backgroundColor: '#fbb',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
}

export default TodoItem;