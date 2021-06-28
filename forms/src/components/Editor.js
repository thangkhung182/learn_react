import React, { Component, useState } from "react";

export default class Editor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }

    updateFormValue = (e) => {
        this.setState({[e.target.name]: e.target.value}, 
            () => this.props.submit(this.state)
        )
    }

    render() {
        return (
            <div className="h5 bg-info text-white p-2">
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" 
                        name="name"
                        value={this.state.name}
                        onChange={this.updateFormValue}
                    />
                </div>
            </div>
        )
    }
}