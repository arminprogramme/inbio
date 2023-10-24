import  { Component } from 'react';
import Header from './Header.jsx'
import Todo from './Todo.jsx'
import  './TodoList.css'
class TodoList extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="inputs-todo">
                    <div className="input-add"></div>
                    <div className="input-filter"></div>
                </div>
                <Todo/>
            </div>
        );
    }
}

export default TodoList;
