import React from 'react';

const Button = (props) => (
    
        <button onClick={props.onClick}>
            {props.value}
        </button>
    
)

export default Button;