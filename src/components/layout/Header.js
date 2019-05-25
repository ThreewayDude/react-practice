import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo List</h1>
        </header>
    );
}

const headerStyle = {
    backgroundColor: '#fbfffb',
    color: '#fbb',
    padding: '10px',
    borderBottom: '1px #ccc dotted',
}

export default Header;