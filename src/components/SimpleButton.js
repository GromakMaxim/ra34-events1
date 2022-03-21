import React from "react";

function SimpleButton(props) {
    return <button className= {props.cl} onClick= {props.func} > {props.name} </button>
}

export default SimpleButton;
