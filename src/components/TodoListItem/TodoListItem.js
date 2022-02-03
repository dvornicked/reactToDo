import React from 'react'

import './TodoListItem.css'

const TodoListItem = ({ label, important = false }) => {
    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    }

    return (
        <span className='todo-list-item'>
            <span className='todo-list-item-label' style={style}>
                {label}
            </span>

            <button className='btn btn-outline-success btn-sm float-end'>
                <i className="bi bi-exclamation-lg"></i>
            </button>

            <button className='btn btn-outline-danger btn-sm float-end'>
                <i className="bi bi-trash"></i>
            </button>
        </span>
    )
}

export default TodoListItem