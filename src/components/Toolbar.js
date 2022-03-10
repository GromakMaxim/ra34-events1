import React, {Component} from "react";
import SimpleButton from "./SimpleButton";

export default class Toolbar extends Component{

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let arr = [];
        this.props.filters.forEach(filter=>{
            arr.push(<SimpleButton name={filter} key={filter}/>);
        });
        return arr;
    }
}
