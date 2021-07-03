import React, { Component, useState } from "react";

export default class Editor extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "Bob",
            flavor: "Vannilla",
            toppings: ["Strawberries"]
        }

        this.flavors = ["Chocolate", "Double chocolate", "Triple chocolate", "Vanilla"]
        this.toppings = ["Sprinkles", "Fudge sauce", "Strawberries", "Maple syrup"]
    }
    
    updateFormValue = (e) => {
        this.setState({[e.target.name]: e.target.value}, 
            () => this.props.submit(this.state)
        )
    }

    updateFormValueOptions = e => {
        let options = [...e.target.options].filter(o => o.selected).map(o => o.value)
        this.setState({[e.target.name]: options}, () => this.props.submit(this.state))
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

                <div className="form-group">
                    <label>Ice cream flavors</label>
                    <select className="form-control"
                        name="flavor" 
                        value={this.state.flavor}
                        onChange={this.updateFormValue}
                    >
                        {this.flavors.map(flavor =>
                            <option value={flavor} key={flavor}>{flavor}</option>
                        )}
                    </select>    
                </div>

                <div className="form-group">
                    <label>Ice cream toppings</label>
                    <select className="form-control"
                        multiple={true}
                        name="toppings" 
                        value={this.state.toppings}
                        onChange={this.updateFormValueOptions}
                    >
                        {this.toppings.map(top =>
                            <option value={top} key={top}>{top}</option>
                        )}
                    </select>    
                </div>
            </div>
        )
    }
}