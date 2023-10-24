import  { Component } from 'react';

class Note extends Component {
    render() {
        return (
            <div className='note-item shadow-lg'>
                {this.props.title}
            </div>
        );
    }
}

export default Note;
