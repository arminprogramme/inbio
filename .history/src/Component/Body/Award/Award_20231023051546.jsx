import  { Component } from 'react';
import './Award.css'
class Award extends Component {
    render() {
        return (
            <div className='award-container text-center '>
               <div className="award-title">
            <h6 className='red-color'>VISIT MY AWARD</h6>
            <h2>Award I Have Achieve</h2>
               </div>
               <div className="award-content"></div>
            </div>
        );
    }
}

export default Award;
