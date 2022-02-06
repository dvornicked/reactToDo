import React, { Component } from 'react'

import './ItemStatusFilter.css'

export default class ItemStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ]

    onFilterChange = ({filter}) => {
        this.props.onFilterChange(filter)
    }

    render() {
        const { filter } = this.props
        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = filter === name
            const btnClass = isActive ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button
                type='button'
                className={`btn ${btnClass}`}
                onClick={() => this.onFilterChange({filter: name})}
                key={name}>
                    {label}
                </button>
            )
        })
        return (
            <div className='btn-group'>
               {buttons}
            </div>
        )
    }
}