import React from 'react'

const validation = (props) => {
    let message = null;
    if(props.len < 5){
        message = <p>Text is too short!</p>
    }else{
        message = <p>Text is long enough!!!!</p>
    }
    return (
        <div>
            {message}
        </div>
    )
}
export default validation;