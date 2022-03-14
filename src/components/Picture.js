import React, {Component} from "react";

export default class Picture extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <img className='picture' src={this.props.path} alt='simple picture'/>
        );
    }
}
