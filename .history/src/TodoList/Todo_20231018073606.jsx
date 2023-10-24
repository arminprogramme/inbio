import  { Component } from 'react';

class Todo extends Component {
    render() {
        return (
            <div className={'todo items-center grid grid-cols-5  shadow-lg my-3 rounded '  + (this.props.completed ? 'completed' : null)}>
                <div className="py-2 px-2 text-todo col-span-2">
                    <h2>{this.props.title}</h2>
                </div>
                <div></div>
                <div className="check-todo text-center w-full">
                    <button className='bg-green-500 h-full w-full  py-2'>Complete</button>
                </div>
                <div className="delete-todo text-center">
                    <button className='bg-red-500 h-full w-full  py-2'>Remove</button>
                </div>
            </div>
        );
    }
}

export default Todo;
