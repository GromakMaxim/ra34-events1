import React, {Component} from "react";
import Toolbar from "./Toolbar";

export default class Portfolio extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const elem = <Toolbar
            filters={["All", "Websites", "Flayers", "Business Cards"]}
            selected="All"
            onSelectFilter={(filter) => {console.log(filter);}}/>
        return elem;
    }
}
