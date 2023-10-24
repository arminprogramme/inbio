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
               <div className="award-content text-center">
                <div className="grid grid-col-1 md:grid-cols-2 gap-5 lg:grid-cols-4 text-center">
                    <AwardItem/>
                    <AwardItem/>
                    <AwardItem/>
                    <AwardItem/>
                </div>
                <div className="grid grid-col-1 gap-5 py-5 md:grid-cols-4">
                    <div></div>
                <AwardItem/>
                    <AwardItem/>
                    <div></div>
                </div>
               </div>
            </div>
        );
    }
}

export default Award;
