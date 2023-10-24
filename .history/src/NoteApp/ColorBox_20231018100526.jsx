import  { Component } from 'react';

class ColorBox extends Component {
    render() {
        return (
            <div className='p-3 w-5 h-5 rounded my-2' style={{backgroundColor : 'red' , cursor : 'pointer'}}>
               
            </div>
        );
    }
}

export default ColorBox;
