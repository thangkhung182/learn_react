import React, { Component } from 'react';
import ActionButton from "./ActionButton"

export default class List extends Component {

    constructor(props) {
        super(props)
        this.state = {
            names: ["Bob", "Alice", "Dora"]
        }
    }

    reverseList = () => {
        this.setState({names: this.state.names.reverse()})
    }

    render() {
        console.log("Render list")
        return(
            <div>
                <ActionButton callback={this.reverseList} text="Reverse names"/>
                {
                    this.state.names.map((name, index) => {
                        return <h5 id={name.toLowerCase()} key={name}>{name}</h5>
                    })
                }
            </div>
        )
    }

}