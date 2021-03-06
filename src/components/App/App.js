import React, { Component } from 'react'

import AppHeader from '../AppHeader'
import SearchPanel from '../SearchPanel'
import TodoList from '../TodoList'
import ItemStatusFilter from '../ItemStatusFilter'
import AddItem from '../AddItem'

import './App.css'

export default class App extends Component {

    maxId = 100

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee')
        ],
        term: '',
        filter: 'all'
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex(el => el.id === id)

            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]

            return {
                todoData: newArray
            }
        })
    }

    addItem = (label) => {
        const newItem = this.createTodoItem(label)

        this.setState(({ todoData }) => {
            const newTodoData = [...todoData, newItem]

            return {
                todoData: newTodoData
            }
        })
    }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((item) => item.id === id)
            const oldItem = arr[idx]
            const newItem = {...oldItem, [propName]: !oldItem[propName]}
            const newArray = [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
            return {
                todoData: newArray
            }
    }

    onToggleImportant = (id) => {
        this.setState(({ todoData }) => this.toggleProperty(todoData, id, 'important'))
    }

    onToggleDone = (id) => {
        this.setState(({ todoData }) => this.toggleProperty(todoData, id, 'done'))
    }

    onSearchChange = term => this.setState({term})

    onFilterChange = filter => this.setState({filter})

    render() {
        const { todoData, term, filter } = this.state

        let visibleItems = todoData
        .filter(item => item.label.toLowerCase().includes(term.toLowerCase()))

        if (this.state.filter === 'active') visibleItems = visibleItems.filter(item => !item.done)
        if (this.state.filter === 'done') visibleItems = visibleItems.filter(item => item.done)
        
        const doneCount = todoData.filter((item) => item.done === true).length
        const todoCount = todoData.length - doneCount

        return (
            <div className='todo-app'>
            <AppHeader  toDo={todoCount} done={doneCount}/>
            <div className='top-panel d-flex'>
                <SearchPanel onSearchChange={this.onSearchChange}/>
                <ItemStatusFilter 
                onFilterChange={this.onFilterChange}
                filter={filter} />
            </div>
            <TodoList
            todos={visibleItems}
            onDeleted={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}/>
            <AddItem onAdd={this.addItem}/>
        </div>
        )
    }
}