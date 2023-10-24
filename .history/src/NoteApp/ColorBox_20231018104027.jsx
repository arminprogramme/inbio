import  { Component } from 'react';

class ColorBox extends Component {
    render() {
       console.log(this.props.color); // 32 * undifined
        return (
            <div className='p-3 w-5 h-5 rounded my-2 mx-2' style={{backgroundColor : this.props.color}}>
               
            </div>
        );
    }
}

export default ColorBox;
