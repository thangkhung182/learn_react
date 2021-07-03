import React, { Component } from "react"

export default class ActionButton extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        console.log("Render action button (" + this.props.text + ")")
        return (
            <button className = "btn btn-primary m-2"
                onClick={this.props.callback}
            >
                {this.props.text}
            </button>
        )
    }
    
}