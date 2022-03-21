import React from "react";

function Picture(props) {
    return (
        <img className='picture' src= {props.path} alt='simple'/>
    );
}

export default Picture;
