import React from 'react';


// check the length of text passed via props and output 'Text too short' or 
// 'Text long enough'depending on the length (eg take 5 as a minimum length)
const validationComponent =(props)=>{
    let textLength = props.inputLength
    return (
        <div>
            {textLength < 5 ? 'Text too short' : 'Text long enough '}
        </div>   
    )

}
export default validationComponent;