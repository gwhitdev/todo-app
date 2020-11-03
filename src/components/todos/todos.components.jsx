import React from 'react';
import Button from '../button/button.component';


const Todos = (props) => {

    //<button onClick={() => this.deleteItem(item.id)}>Delete</button>
    
    return (
        
        <div className="Todo">
         <ul>
              {props.todos.map(item => {
                return (
                  <li key={item.id}>
                  {item.value} <Button value={'x'} onClick={() => props.onClick(item.id)}/>
                  
                  
                  </li>
                )
              })}
            </ul>
        </div>

    )
}

export default Todos;