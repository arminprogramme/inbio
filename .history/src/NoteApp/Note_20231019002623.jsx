import  { Component } from 'react';

class Note extends Component {

    noteHandler = (id) => {
        this.props.onNote(id)
    }

    render() {
        return (
            <div className='note-item shadow-lg py-4' style={{backgroundColor : this.props.color , cursor : 'pointer'}} onClick={this.noteHandler.bind(this , this.props.id)}>
                {this.props.title}
            </div>
        );
    }
}

export default Note;
