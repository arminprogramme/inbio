import  { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <div className='todo grid'>
                <div className="text-todo"></div>
                <div className="check-todo"></div>
                <div className="delete-todo"></div>
            </div>
        );
    }
}

export default Todo;
