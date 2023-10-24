import   { Component } from 'react';
import TodoList from './TodoList/TodoList.jsx'
import './App.css'

class App extends Component {
 

  render() {
    return (
    <div className='todo-project'>
      <div className="container">
        <TodoList/>
      </div>
    </div>
    );
  }

  
}

export default App;