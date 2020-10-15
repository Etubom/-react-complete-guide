import React from 'react';

const charComponent = (props) =>{
    return(
        <div style = {props.style}>
            <p> {props.inputValue} </p>
        </div>
    )

} 
export default charComponent;