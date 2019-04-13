import React from 'react';
import './User.css';

export const userInput = (props) => {
    return(
        <div className="UserInput">
            <input type="text" value={props.name} onChange={props.change}/>
        </div>
    )
};

export const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>{props.name}</p>
            <p>{props.status}</p>
        </div>
    )
};