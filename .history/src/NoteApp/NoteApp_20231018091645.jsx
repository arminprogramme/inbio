import  { Component } from 'react';
import Header from './Header.jsx'
import ColorBox from './ColorBox.jsx'
import Note from './Note.jsx'
import './NoteApp.css'
class NoteApp extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="main-note-app my-10">
                    <div className="input-note-app">
                        <input type="text" className='w-full' />
                    </div>
                    <div className="colors-note-app">
                    <ColorBox />
                    </div>
                    <div className="button-note-app"></div>
                </div>
                <Note />
            </div>
        );
    }
}

export default NoteApp;
