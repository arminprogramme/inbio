import  { Component } from 'react';

class ColorBox extends Component {
    render() {
        console.log(this.props.color);
        return (
            <div className='p-3 w-5 h-5 rounded my-2 mx-2' style={{backgroundColor : this.props.0 , cursor : 'pointer'}}>
               
            </div>
        );
    }
}

export default ColorBox;
