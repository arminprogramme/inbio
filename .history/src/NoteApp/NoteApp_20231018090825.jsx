import  { Component } from 'react';
import Header from './Header.jsx'
import ColorBox from './ColorBox.jsx'
import Note from './Note.jsx'
class NoteApp extends Component {
    render() {
        return (
            <div>
                <Header />
                <ColorBox />
                <Note />
            </div>
        );
    }
}

export default NoteApp;
