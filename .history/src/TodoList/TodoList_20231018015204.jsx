import  { Component } from 'react';
import Header from './Header.jsx'
import Todo from './Todo.jsx'
import  './TodoList.css'
class TodoList extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="inputs-todo grid grid-cols-2 justify-center text-center">
                    <div className="input-add">
                        <input className='shadow-lg' type="text" name="" id="name-todo" />
                    </div>
                    <div className="input-filter">
                        <input type="text" className='w-full' />
                    </div>
                </div>
                <Todo/>
            </div>
        );
    }
}

export default TodoList;
