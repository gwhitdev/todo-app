import React from 'react';
import Button from '../button/button.component';

const Form = (props) => {

    return (
        <div className="Form">
         
            <input
                type={props.text}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />

          
            <Button 
                onClick={() => props.onClick()}
                value={'Add'}
            />
            
        </div>
    )
}

export default Form;
