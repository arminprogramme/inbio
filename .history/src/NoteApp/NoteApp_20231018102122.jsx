import  { Component } from 'react';
import Header from './Header.jsx'
import ColorBox from './ColorBox.jsx'
import Note from './Note.jsx'
import './NoteApp.css'
class NoteApp extends Component {

    constructor(props){
        super(props)

        this.state = {
            colors : ['#fff' , '#ffd37f' , '#fffa81' , '#d5fa80' , '#78f87f' , '#78fbd6' , '#79fdfe' , '#7ad6fd' , '#7b84fc' , '#d687fc' , '#ff89fd'],
            notes : [],
            inputColor : '',
            noteTitle : ''
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="main-note-app my-10">
                    <div className="input-note-app">
                        <input type="text" className='w-full py-2 px-2 rounded shadow' value={this.state.inputColor} />
                    </div>
                    <div className="colors-note-app flex">
                    {this.state.colors.map(color  => {
                        return <ColorBox key={color} {color}/>
                    })}
                    </div>
                    <div className="button-note-app flex justify-end">
                        
                        <button className='mx-1 font-bold text-white py-2 bg-blue-500 px-3 rounded'>Add</button>
                        <button className='mx-1 font-bold text-white py-2 bg-red-500 px-3 rounded'>Remove</button>
                    </div>
                </div>
                <Note />
            </div>
        );
    }
}

export default NoteApp;
