import  { Component } from 'react';

class ColorBox extends Component {

    onColorHandler = (color) => {
        this.props.onColor(color)
    }
    render() {
        return (
            <div className='p-3 w-5 h-5 rounded my-2 mx-2' style={{backgroundColor : this.props.color}} onClick={this.onColorHandler.bind(this , this.props.color)}>
               
            </div>
        );
    }
}

export default ColorBox;
