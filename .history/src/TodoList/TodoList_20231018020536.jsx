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
                    <div className="input-add flex justify-between">
                        <input className='shadow-lg' type="text" name="" id="name-todo" />
                        <button className='add-todo-btn'>
                            Add
                            </button>
                    </div>
                    <div className="input-filter">
                     <select name="" id="">
                        <option value="All" key="">All</option>
                        <option value="Completed" key="">Completed</option>
                        <option value="Uncompleted" key="">Uncompleted</option>
                     </select>
                    </div>
                </div>
              <div className="todo-list">
                <Todo/>
                <Todo/>
              </div>
            </div>
        );
    }
}

export default TodoList;
