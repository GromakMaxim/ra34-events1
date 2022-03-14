import React, {Component} from "react";

export default class SimpleButton extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <button className={this.props.cl} onClick={this.props.func}> {this.props.name}</button>
    }
}
