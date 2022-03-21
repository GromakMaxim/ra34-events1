import React, {Component} from "react";
import Toolbar from "./Toolbar";
import {ProjectList} from "./ProjectList";

export default class Portfolio extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selected: "Websites"
        }

        this.changeState = this.changeState.bind(this);
    }

    changeState(newFilter) {
        this.setState({selected: newFilter});
    }

    render() {
        return (
            <div>
                <Toolbar
                    filters={["All", "Websites", "Flayers", "Business Cards"]}
                    selected={this.state.selected}
                    changeStateFunc={this.changeState}
                />

                <ProjectList
                    actualFilter={this.state.selected}
                />

            </div>
        );
    }
}
