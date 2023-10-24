import  { Component } from 'react';

class ColorBox extends Component {
    render() {
        let {color} = this.props
        return (
            <div className='p-3 w-5 h-5 rounded my-2 mx-2' style={{backgroundColor : this.props.color , cursor : 'pointer'}}>
               
            </div>
        );
    }
}

export default ColorBox;
