import  { Component } from 'react';
import Header from './Header.jsx'
import Todo from './Todo.jsx'
class TodoList extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Todo/>
                TodoList
            </div>
        );
    }
}

export default TodoList;
