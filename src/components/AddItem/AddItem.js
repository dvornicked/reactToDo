import React, { Component } from 'react'

import './AddItem.css'

export default class AddItem extends Component {

    state = {
        label: ''
    }

    onLableChange = e => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.onAdd(this.state.label)
        this.setState({label: ''})
    }

    render() {
        return (
            <form className="input-group add-item" onSubmit={this.onSubmit}>
                <input type="text"
                    className="form-control"
                    placeholder="What needs to be done"
                    onChange={this.onLableChange} 
                    value={this.state.label} />
                <div className="input-group-append">
                    <button
                        className="btn btn-outline-secondary">
                        Add Item
                    </button>
                </div>
            </form>
        )
    }
}