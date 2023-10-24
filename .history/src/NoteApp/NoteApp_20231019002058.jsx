import  { Component } from 'react';
import Header from './Header.jsx'
import ColorBox from './ColorBox.jsx'
import Note from './Note.jsx'
import './NoteApp.css'
class NoteApp extends Component {

    constructor(props){
        super(props)

        this.state = {
            colors : ['#f9f9f9f9' , '#ffd37f' , '#fffa81' , '#d5fa80' , '#78f87f' , '#78fbd6' , '#79fdfe' , '#7ad6fd' , '#7b84fc' , '#d687fc' , '#ff89fd'],
            notes : [],
            inputColor : '#f9f9f9f9',
            noteTitle : ''
        }
    }

    changeColorHandler = (color) => {
        this.setState({
            inputColor : color
        })
    }

    changeInputColor = (event) => {
        this.setState({
            noteTitle : event.target.value
        })
    }

    addHandler = () => {
        if(this.state.noteTitle.trim()){
            let newNote = {id : this.state.notes.length+1 , title : this.state.noteTitle , color : this.state.inputColor}
            this.setState({
                notes : [...this.state.notes  , newNote]
            })
        }
    }

    noteClickHandler = (userID) => {
        console.log(userID);
    }


    render() {
        return (
            <div>
                <Header />
                <div className="main-note-app my-10">
                    <div className="input-note-app">
                        <input onChange={(event) => this.changeInputColor(event)} type="text" style={{backgroundColor : this.state.inputColor}} className='w-full py-2 px-2 rounded shadow' value={this.state.noteTitle} />
                    </div>
                    <div className="colors-note-app flex">
                    {this.state.colors.map(color  => {
                        return <ColorBox key={color} color={color} onColor={this.changeColorHandler}/>
                    })}
                    </div>
                    <div className="button-note-app flex justify-end">
                        
                        <button onClick={(event) => this.addHandler(event)} className='mx-1 font-bold text-white py-2 bg-blue-500 px-3 rounded'>Add</button>
                        <button onClick={(event) => this.removeHandler(event)} className='mx-1 font-bold text-white py-2 bg-red-500 px-3 rounded'>Remove</button>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                {this.state.notes.map(note => {
                    return <Note key={note.id} {...note} onNote ={this.noteClickHandler}/>
                })}
                </div>
            </div>
        );
    }
}

export default NoteApp;
