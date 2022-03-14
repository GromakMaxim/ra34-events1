import React, {Component} from "react";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";

export default class Portfolio extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selected: "Websites"
        }
    }

    render() {
        return (
            <div>
                <Toolbar
                    filters={["All", "Websites", "Flayers", "Business Cards"]}
                    selected={this.state.selected}
                />

                <ProjectList actualFilter={this.state.selected}/>

            </div>
        );
    }
}
