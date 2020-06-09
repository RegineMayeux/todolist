import React, { Component } from 'react';
import UnderTask from "./UnderTask";

class Task extends Component {
    state = {  }
    render() { 

        let taskArray = this.props.tasks.map(taskTodo =>
            <li><UnderTask taskTodo={taskTodo} /></li>
        )
        return ( 
            <ul className="task">
                {taskArray}
            </ul>
         );
    }
}
 
export default Task;