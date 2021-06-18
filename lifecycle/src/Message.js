import ActionButton from "./ActionButton";
import React, { Component } from 'react';

export default class Message extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showSpan: false
        }
    }

    handleClick = e => {
        this.setState({showSpan: !this.state.showSpan})
        this.props.callback(e)
    }

    getMessageElement() {
        let div = <div id="messageDiv" className="h5 text-center p-2">
                    {this.props.message}
                </div>
        
        return this.state.showSpan ? <span>{div}</span> : div
    }

    render() {
        console.log("Render message")
        return (
            <div>
                <ActionButton theme="primary" {...this.props} callback={this.handleClick}/>
                {this.getMessageElement()}
            </div>
        )
    }

    componentDidMount() {
        console.log("mount message")
    }
}