import  { Component } from 'react';
import Services from './Services/Services.jsx'
import './Body.css'
class Body extends Component {
    render() {
        return (
            <>
            <div className='black-bg '>
                <div className="limit-width">
                    <Services
                </div>
            </div>
            </>
        );
    }
}

export default Body;
