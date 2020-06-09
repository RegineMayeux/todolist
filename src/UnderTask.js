import React, { Component } from 'react';

class UnderTask extends Component {
    state = {  }
    render() { 
        let taskTodo = this.props.taskTodo;

        let underTaskJSX = taskTodo.underTasks.map(underTask => {
            return <li>{underTask}</li>
        })

        return ( 
            <div className="underTask">
                <h3>{taskTodo.task}</h3>
                <ul>{underTaskJSX}</ul>
            </div>
         );
    }
}
 
export default UnderTask;