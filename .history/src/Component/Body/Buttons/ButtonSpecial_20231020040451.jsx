import  { Component } from 'react';
import   './Buttons.css'
class ButtonSpecial extends Component {
    render() {
        return (
           <button className='sp-button red-color'>{this.props.title}</button>
        );
    }
}

export default ButtonSpecial;
