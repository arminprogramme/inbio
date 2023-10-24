import  { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <div className='todo items-center grid grid-cols-5  shadow-lg my-2'>
                <div className="py-3 px-2 text-todo col-span-2">
                    <h2>Todo</h2>
                </div>
                <div></div>
                <div className="check-todo text-center w-full">
                    <button className='bg-green-500 h-full w-full rounded py-2'>Complete</button>
                </div>
                <div className="delete-todo text-center">
                    <button>Remove</button>
                </div>
            </div>
        );
    }
}

export default Todo;
