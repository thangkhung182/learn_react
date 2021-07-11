import React, {Component} from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

export default class App extends Component {

    state = {};
    
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            pos => this.setState({lat: pos.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );

    }
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        } else if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>;
        }
        
        return <Spinner />;
    }   
}
