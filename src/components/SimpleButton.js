import React, {Component} from "react";

export default class SimpleButton extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {filtered: 'All'};
    }

    handleClick(e) {
        let txt = e.currentTarget.textContent;
        this.setState(prevState => ({filtered: txt}));

        Array.from(document.getElementsByClassName('filter'))
            .forEach(btn=>{
                if (e.currentTarget !== btn) btn.classList.remove('selected')});
    }

    render() {
        let classes = 'filter';
        if (this.state.filtered === this.props.name) classes = classes + ' selected';

        console.log(this.state.filtered)
        const btn = <button className={classes}
                            onClick={e => this.handleClick(e)}>{this.props.name}</button>

        return btn;
    }
}
