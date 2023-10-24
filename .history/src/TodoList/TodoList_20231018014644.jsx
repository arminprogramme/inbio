import  { Component } from 'react';
import Header from './Header.jsx'
import Todo from './Todo.jsx'
import  './TodoList.css'
class TodoList extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="inputs-todo flex">
                    <div className="input-add">
                        <input className='shadow' type="text" name="" id="" />
                    </div>
                    <div className="input-filter">
                        <input type="text" />
                    </div>
                </div>
                <Todo/>
            </div>
        );
    }
}

export default TodoList;
