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
      if(this.state.todoTitle){
        let newTodo = {id : this.state.todo.length +1 , completed : false , title : this.state.todoTitle}

        this.setState({
         todo : [...this.state.todo , newTodo],
         todoTitle : ''
        })
      }
    }


    removeTodoHandler = (userID) => {
        let newList = [...this.state.todo]

       let indexTodo =  newList.findIndex(todo => {
            return todo.id === userID
        })

        newList.splice(indexTodo , 1)

        this.setState({
            todo : newList
        })
    }


    checkTodoHandler = (userID) => {
      let newList = [...this.state.todo]

      newList.map(todo => {
        if(todo.id === userID){
           return todo.completed = !todo.completed
        }
              }
          )

    this.setState({
        todo : newList
    })
   
    }


    selectHandler = (event) => {
        this.setState({
            status : event.target.value
        })
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
                     <select name="" id="" onChange={(event) => this.selectHandler(event)}>
                        <option value="all" key="">All</option>
                        <option value="Completed" key="">Completed</option>
                        <option value="Uncompleted" key="">Uncompleted</option>
                     </select>
                    </div>
                </div>
              <div className="todo-list my-3">
               {this.state.status === 'completed' && this.state.todo.filter(todo => todo.completed).map(todo => {
                return <Todo key={todo.id} {...todo} onCheck={this.checkHandler} onRemove={this.removeTodoHandler}/>
               })}
               {this.state.status === 'Uncompleted' && this.state.todo.filter(todo => !todo.completed).map(todo => {
                return <Todo key={todo.id} {...todo} onCheck={this.checkHandler} onRemove={this.removeTodoHandler}/>
               })}
               {this.state.status === 'all' && this.state.todo.map(todo => {
                return <Todo key={todo.id} {...todo} onCheck={this.checkTodoHandler} onRemove={this.removeTodoHandler}/>
               })}
              </div>
            </div>
        );
    }
    /** {this.state.todo.map(todo => {
                    return <Todo key={todo.id} {...todo} onCheck={this.checkTodoHandler} onRemove={this.removeTodoHandler}/>
                })} */
}

export default TodoList;
