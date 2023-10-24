import  { Component } from 'react';
import   './Buttons.css'
class ButtonSpecial extends Component {

    subHandler = (event) =>{
        this.props.onSubmit(event)
    }

    render() {
        return (
           <button className='sp-button red-color' onClick={(event) => this.subHandler(event)}>{this.props.title}</button>
        );
    }
}

export default ButtonSpecial;
