import  { Component } from 'react';
import Header from './Header.jsx'
import ColorBox from './ColorBox.jsx'
import Note from './Note.jsx'
import './NoteApp.css'
class NoteApp extends Component {

    constructor(props){
        super(props)

        this.state = {
            colors : ['#fff' , '#ffd37f' , '#fffa81' , '#d5fa80' , '#78f87f' , '#78fbd6' , '#79fdfe' , '#7ad6fd' , '#7b84fc' , '#d687fc' , '#ff89fd']
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="main-note-app my-10">
                    <div className="input-note-app">
                        <input type="text" className='w-full py-2 px-2 rounded shadow' />
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
