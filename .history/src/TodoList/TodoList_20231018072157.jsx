import  { Component } from 'react';
import Header from './Header.jsx'
import Todo from './Todo.jsx'
import  './TodoList.css'

class TodoList extends Component {

    constructor(props){
        super(props)

        this.state = {
            status : 'all',
            todoTitle : '',
            todo : []
        }
    }   

    valueHandler = (event) => {
        this.setState({
            todoTitle : event.target.value
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="inputs-todo grid grid-cols-2 justify-center text-center my-5">
                    <div className="input-add flex">
                        <input className='shadow-lg px-2' value={this.state.todoTitle} type="text" name="" id="name-todo" onChange={(event) => this.valueHandler(event)} />
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
              <div className="todo-list my-3">
                <Todo/>
                <Todo/>
              </div>
            </div>
        );
    }
}

export default TodoList;
