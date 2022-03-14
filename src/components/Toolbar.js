import React, {Component} from "react";
import SimpleButton from "./SimpleButton";

export default class Toolbar extends Component {

    constructor(props, context) {
        super(props, context);
    }

    handleClick(e) {
        e.currentTarget.classList.add('selected');
        console.log(e.currentTarget.textContent);
    }

    renderButton(filter) {
        return <SimpleButton
            name={filter}
            key={filter}
            func={
                (e) => this.handleClick(e)
            }
        />;
    }


    render() {
        let arr = [];
        this.props.filters.forEach(filter => {
            let btn = this.renderButton(filter);
            arr.push(btn);
        });
        return (
            <div className='controls'>
                {arr}
            </div>
        );
    }
}
