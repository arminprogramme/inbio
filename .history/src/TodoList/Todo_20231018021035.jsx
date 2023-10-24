import  { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <div className='todo items-center grid grid-cols-5 py-3 shadow-lg'>
                <div className="p-3 text-todo col-span-2">
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
