import  { Component } from 'react';
import AwardItem from './AwardItem.jsx'
import './Award.css'
class Award extends Component {
    render() {
        return (
            <div className='award-container text-center '>
               <div className="award-title">
            <h6 className='red-color'>VISIT MY AWARD</h6>
            <h2>Award I Have Achieve</h2>
               </div>
               <div className="award-content">
                <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4">
                    <AwardItem/>
                    <AwardItem/>
                    <AwardItem/>
                    <AwardItem/>
                </div>
                <div className="grid grid-col-1 md:grid-cols-2">
                <AwardItem/>
                    <AwardItem/>
                </div>
               </div>
            </div>
        );
    }
}

export default Award;
