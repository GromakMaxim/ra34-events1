import React, {Component} from "react";
import SimpleButton from "./SimpleButton";

export default class Toolbar extends Component {

    constructor(props, context) {
        super(props, context);
    }

    handleClick(e) {
        this.props.changeStateFunc(e.currentTarget.textContent)
    }



    renderButton(filter) {
        if (this.props.selected === filter){
            console.log('render selected')
            return <SimpleButton
                name={filter}
                key={filter}
                func={
                    (e) => this.handleClick(e)
                }
                cl = 'filter selected'
            />;
        } else {
            console.log('render usual')
            return <SimpleButton
                name={filter}
                key={filter}
                func={
                    (e) => this.handleClick(e)
                }
                cl = 'filter'
            />;
        }
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
