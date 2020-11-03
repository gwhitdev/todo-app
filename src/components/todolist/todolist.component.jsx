import React from 'react';

import Form from '../form/form.component';
import Todos from '../todos/todos.components';


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newItem: "",
            list: []
        }
    }

    updateInput(key, value) {
      this.setState({
        [key]: value,
      })
    }


    addItem() {
      const newItem = {
        id: 1 + Math.random(),
        value: this.state.newItem.slice()
      };

      const list = [...this.state.list];

      list.push(newItem);

      this.setState({
        list,
        newItem: ""
      })
    }

    deleteItem(id) {
      const list = [...this.state.list];

      const updatedList = list.filter(item => item.id !== id);

      this.setState({list: updatedList});
    }

    render() {
      return (
        <div className="todoList">
          <div>
            Add an item...
          </div>
          <br />
          
          <Form
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
            onClick={() => this.addItem()}
            />

            <Todos 
              todos={this.state.list}
              onClick={(item) => this.deleteItem(item)}
            />
        </div>
      )
    }
    
}

export default TodoList;