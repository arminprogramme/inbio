import  { Component } from 'react';

class Note extends Component {
    render() {
        return (
            <div className='note-item shadow-lg py-4' style={{backgroundColor : this.props.color}}>
                {this.props.title}
            </div>
        );
    }
}

export default Note;
