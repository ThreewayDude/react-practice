import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input type="text" name="title" placeholder="Add Todo..."
                  style={textBoxStyle} value={this.state.title} onChange={this.onChange}/>
                
                <input type="submit" value="Submit" className="btn" style={btnStyle} />
            </form>
        );
    }
}

const textBoxStyle = {
    flex: '10',
    border: 'none',
    padding: '15px',
    fontSize: '15px'
}

const btnStyle = {
    flex: '1',
    border: 'none',
    background: '#fbb',
    color: '#fff',
    padding: '15px 10px',
    fontSize: '15px'
}

export default AddTodo;