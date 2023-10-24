import  { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <div className='todo grid grid-cols-5'>
                <div className="text-todo col-span-2">
                    <h2>Todo</h2>
                </div>
                <div></div>
                <div className="check-todo">
                    <button>Complete</button>
                </div>
                <div className="delete-todo">
                    <button>Remove</button>
                </div>
            </div>
        );
    }
}

export default Todo;
