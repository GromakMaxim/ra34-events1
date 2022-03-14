import React, {Component} from "react";

export default class SimpleButton extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {filtered: 'All'};
    }

    render() {
        return <button className='filter' onClick={this.props.func}> {this.props.name}</button>
    }
}
