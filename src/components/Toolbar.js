import React from "react";
import SimpleButton from "./SimpleButton";

function Toolbar(props) {
    function handleClick(e) {
        props.changeStateFunc(e.currentTarget.textContent.trim())
    }


    function renderButton(filter, props) {
        let cl = 'filter';
        if (filter === props.selected) cl = cl + ' selected';

        return <SimpleButton
            name={filter}
            key={filter}
            func={
                (e) => handleClick(e)
            }
            cl={cl}
        />;
    }


    let arr = [];
    props.filters.forEach(filter => {
        let btn = renderButton(filter, props);
        arr.push(btn);
    });

    return (
        <div className='controls'>
            {arr}
        </div>
    );

}

export default Toolbar;
