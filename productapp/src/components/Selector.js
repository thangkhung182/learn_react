import React, { Component } from "react";

export class Selector extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selection: React.Children.toArray(props.children)[0].props.name
        }
    }

    setSelection = e => {
        e.persist()
        this.setState({selection: e.target.name})
    }

    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col-2">
                    <div className="d-grid gap-2 m-2">
                    {
                        React.Children.map(this.props.children, c => 
                            <button
                                name={c.props.name}
                                onClick={this.setSelection}
                                className={"btn " + 
                                    (this.state.selection === c.props.name ? "btn-primary active":
                                        "btn-secondary"
                                    )
                                }
                            >
                                {c.props.name}
                            </button>
                        )
                    }
                    </div>
                </div>

                <div className="col">
                    {
                        React.Children.toArray(this.props.children)
                            .filter(c => c.props.name === this.state.selection)
                    }
                </div>
            </div>
        </div>
    }
}