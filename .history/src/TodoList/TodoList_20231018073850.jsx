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

    clickHandler = () => {
       let newTodo = {id : this.state.todo.length +1 , completed : false , title : this.state.todoTitle}

       this.setState({
        todo : [...this.state.todo , newTodo],
        todoTitle : ''
       })
    }

    removeTodoHandler = (userID) => {
        console.log(userID);
    }
    checkTodoHandler = (userID) => {
        console.log(userID);
    }


    render() {
        return (
            <div>
                <Header/>
                <div className="inputs-todo grid grid-cols-2 justify-center text-center my-5">
                    <div className="input-add flex">
                        <input className='shadow-lg px-2' value={this.state.todoTitle} type="text" name="" id="name-todo" onChange={(event) => this.valueHandler(event)} />
                        <button className='add-todo-btn' onClick={(event) => this.clickHandler(event)}>
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
                {this.state.todo.map(todo => {
                    return <Todo key={todo.id} {...todo}/>
                })}
              </div>
            </div>
        );
    }
}

export default TodoList;