import   { Component } from 'react';
import NoteApp from './NoteApp/NoteApp.jsx'
import './App.css'

class App extends Component {
 

  render() {
    return (
    <div className='noteApp-project'>
      <div className="container">
       <NoteApp/>
      </div>
    </div>
    );
  }

  
}

export default App;