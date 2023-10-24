import  { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <div className='todo grid grid-cols-4'>
                <div className="text-todo col-span-2">
                    <h2>Todo</h2>
                </div>
                <div></div>
                <div className="check-todo text-center">
                    <button>Complete</button>
                </div>
                <div className="delete-todo text-center">
                    <button>Remove</button>
                </div>
            </div>
        );
    }
}

export default Todo;
