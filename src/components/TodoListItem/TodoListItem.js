import React from 'react'

import './TodoListItem.css'

const TodoListItem = ({ label, onDeleted, onToggleImportant, onToggleDone, done, important }) => {
    let classNames = 'todo-list-item'
    if (done) classNames += ' done'

    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    }

    return (
        <span className={classNames}>
            <span 
            className='todo-list-item-label'
            style={style}
            onClick={onToggleDone}>
                {label}
            </span>

            <button
            className='btn btn-outline-success btn-sm float-end'
            onClick={onToggleImportant}>
                <i className="bi bi-exclamation-lg"></i>
            </button>

            <button
            className='btn btn-outline-danger btn-sm float-end'
            onClick={onDeleted}>
                <i className="bi bi-trash"></i>
            </button>
        </span>
    )
}

export default TodoListItem